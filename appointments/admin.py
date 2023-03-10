from django.contrib import admin
from .models import Appointment


@admin.register(Appointment)
class AppoinmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'date', 'time']
    date_hierarchy = ('date')
    list_filter = ['date']
    list_per_page = 20
    search_fields = ['doctor', 'name', ]
