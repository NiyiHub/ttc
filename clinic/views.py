from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .models import Slider, Service, Faq
from django.views.generic import ListView, DetailView, TemplateView


class HomeView(ListView):
    template_name = 'clinic/index.html'
    queryset = Service.objects.all()
    context_object_name = 'services'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['sliders'] = Slider.objects.all()
        # context['experts'] = Doctor.objects.all()
        return context


class ServiceListView(ListView):
    queryset = Service.objects.all()
    template_name = "clinic/services.html"


class ServiceDetailView(DetailView):
    queryset = Service.objects.all()
    template_name = "clinic/service_details.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["services"] = Service.objects.all()
        return context


class FaqListView(ListView):
    template_name = 'clinic/faqs.html'
    queryset = Faq.objects.all()
