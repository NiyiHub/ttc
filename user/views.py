from django.contrib.auth import login, logout, authenticate
from django.shortcuts import redirect, render
from django.contrib import messages
from django.views.generic import CreateView
from .forms import PatientSignUpForm, DoctorSignUpForm
from django.contrib.auth.forms import AuthenticationForm
from .models import User


def register(request):
	return render(request, 'user/register.html')


# class patient_register(CreateView):
# 	model = User
# 	form_class = PatientSignUpForm
# 	template = 'user/patient_register.html'

# 	def form_valid(self, form):
# 		user = form.save()
# 		login(self.request, user)
# 		return redirect('/')

def patient_register(request):
	context={}
	if request.POST:
		form = PatientSignUpForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('login')
		context['patient_register_form'] = form

	else:
		form = PatientSignUpForm()
	return render(request, 'user/patient_register.html', {'form':form})


# class doctor_register(CreateView):
# 	model = User
# 	form_class = DoctorSignUpForm
# 	template = 'user/doctor_register.html'

# 	def form_valid(self, form):
# 		user = form.save()
# 		login(self.request, user)
# 		return redirect('/')


def doctor_register(request):
	context={}
	if request.POST:
		form = DoctorSignUpForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('login')
		context['doctor_register_form'] = form

	else:
		form = DoctorSignUpForm()
	return render(request, 'user/doctor_register.html', {'form':form})


def login_request(request):
	if request.method=='POST':
		form = AuthenticationForm(data=request.POST)
		if form.is_valid():
			username = form.cleaned_data.get('username')
			password = form.cleaned_data.get('password')
			user = authenticate(username=username, password=password)
			if user is not None:
				login(request, user)
				return redirect('/')
			else:
				messages.error(request, "Invalid username or password")
		else:
			messages.error(request, "Invalid username or password")
	return render(request, 'user/login.html', context={'form':AuthenticationForm()})


def logout_view(request):
	logout(request)
	return redirect('/')
