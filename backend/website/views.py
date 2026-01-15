from django.shortcuts import render
from django.views import View
from django.views.generic import ListView
from .models import Service, Partner
from products.models import Product
from dashboard.models import Testimonies

class HomeView(View):
		
		def get(self, request):
			partners = Partner.objects.all()  # Fetch partners from the database
			products = Product.objects.all().order_by('-created_at')
			services = Service.objects.all().order_by('name')  # Fetch services from the database
			testimonies = Testimonies.objects.all().order_by('-created_at')  # Fetch testimonies from the database
			return render(request, 'home.html', {'partners': partners, 'products':products, 'services': services, 'testimonies': testimonies})

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


class PartnerListView(ListView):
		model = Partner
		template_name = 'partners.html'
		context_object_name = 'partners'

		def get_queryset(self):
				return Partner.objects.all().order_by('name')