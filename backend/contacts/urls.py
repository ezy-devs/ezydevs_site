# app/urls.py
from django.urls import path
from .views import ContactView, apply_partnership

urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact'),
    path('apply-partnership/', apply_partnership, name='apply_partnership'),
]
