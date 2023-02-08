from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.db import transaction
from .models import User, Patient, Doctor


class PatientSignUpForm(UserCreationForm):
	first_name = forms.CharField(required=True)
	last_name = forms.CharField(required=True)
	email = forms.EmailField(required=True)
	phone_number = forms.CharField(required=True)
	date_of_birth = forms.DateField(required=True)
	sex = forms.CharField(required=True)
	country = forms.CharField(required=True)

	class Meta(UserCreationForm.Meta):
		model = User


	@transaction.atomic
	def save(self):
		user = super().save(commit=False)
		user.is_patient = True
		user.first_name = self.cleaned_data.get('first_name')
		user.last_name = self.cleaned_data.get('last_name')
		user.email = self.cleaned_data.get('email')
		user.phone_number = self.cleaned_data.get('phone_number')
		user.date_of_birth = self.cleaned_data.get('date_of_birth')
		user.sex = self.cleaned_data.get('sex')
		user.country = self.cleaned_data.get('country')
		user.save()
		patient = Patient.objects.create(user=user)
		patient.patient_number = self.cleaned_data.get('patient_number')
		patient.save()
		return user


class DoctorSignUpForm(UserCreationForm):
	first_name = forms.CharField(required=True)
	last_name = forms.CharField(required=True)
	specialty = forms.CharField(required=True)
	email = forms.EmailField(required=True)
	phone_number = forms.CharField(required=True)
	date_of_birth = forms.DateField(required=True)
	sex = forms.CharField(required=True)
	country = forms.CharField(required=True)

	class Meta(UserCreationForm.Meta):
		model = User


	@transaction.atomic
	def save(self):
		user = super().save(commit=False)
		user.is_doctor = True
		user.first_name = self.cleaned_data.get('first_name')
		user.last_name = self.cleaned_data.get('last_name')
		user.email = self.cleaned_data.get('email')
		user.phone_number = self.cleaned_data.get('phone_number')
		user.date_of_birth = self.cleaned_data.get('date_of_birth')
		user.sex = self.cleaned_data.get('sex')
		user.country = self.cleaned_data.get('country')
		user.save()
		doctor = Doctor.objects.create(user=user)
		doctor.specialty = self.cleaned_data.get('specialty')
		doctor.save()
		return user

