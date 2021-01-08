from django.urls import path
from . import views

urlpatterns = [
    path('', views.rendertypingPage, name="rendertypingPage"),
]
