from django.urls import path
from .views import *

urlpatterns = [
		path('', HomeView.as_view(), name='home'),
		path('about/', about, name='about'),
		path('services/', ServiceListView.as_view(), name='services')
]