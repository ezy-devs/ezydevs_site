from django.shortcuts import render
from django.views import View
from django.views.generic import ListView
from .models import Service

class HomeView(View):
		def get(self, request):
				return render(request, 'home.html')

def about(request):
    return render(request, "about.html")

class ServiceListView(ListView):
		model = Service
		template_name = 'services.html'
		context_object_name = 'services'

		def get_queryset(self):
				return Service.objects.all().order_by('name')


def services(request):
    return render(request, 'services.html')
