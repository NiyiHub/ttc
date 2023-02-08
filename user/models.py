from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import date

import random

class User(AbstractUser):
	is_patient = models.BooleanField(default=False)
	is_doctor = models.BooleanField(default=False)
	first_name = models.CharField(max_length=225)
	last_name = models.CharField(max_length=225)
	email = models.EmailField(max_length=60)
	phone_number = models.CharField(max_length=14)
	image = models.ImageField(upload_to='Images/', null=True, blank=True)
	date_of_birth = models.DateField(default=date.today)
	sex = models.CharField(max_length=20)
	country = models.CharField(max_length=60)


class Patient(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
	patient_id = models.IntegerField(default=0)

	def __str__(self):
		return str(self.patient_id)


class Doctor(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
	specialty = models.CharField(max_length=60)

	def __str__(self):
		return self.last_name
