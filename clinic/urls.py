from django.urls import path
from . import views


urlpatterns = [
	path('', views.HomeView.as_view(), name='index'),
    path('services/', views.ServiceListView.as_view(), name="services"),
    path('services/<int:pk>/', views.ServiceDetailView.as_view(),name="service_details"),
    path('faqs/', views.FaqListView.as_view(), name="faqs"),
]
