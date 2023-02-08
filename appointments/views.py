from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import View
from .models import Appointment


class AppointmentView(View):
    """
    for booking appointments.
    """

    def post(self, request, *args, **kwargs):
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        date = request.POST.get('date')
        time = request.POST.get('time')
        note = request.POST.get('note')
        
        if(name and phone and email and date and time):
            Appointment.objects.create(
                name=name, phone=phone, email=email, date=date, time=time, note=note)
            messages.success(request, 'Appointment done successfully')
        return redirect('appointment')
