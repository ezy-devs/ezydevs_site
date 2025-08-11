from django.shortcuts import render,redirect, get_object_or_404
from .models import *
from website.models import *
from contacts.models import *
from products.models import *
from .forms import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView
@login_required(login_url='login_user')
def dashboard(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    return render(request, 'dashboard/dashboard.html')

@login_required(login_url='login_user')
def testimonials_dashboard(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    testimonies = Testimonies.objects.all()
    return render(request, 'dashboard/testimonials.html', {'testimonies': testimonies})


@login_required(login_url='login_user')
def add_testimony(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    if request.method == 'POST':
        form = TestimoniesForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('testimonials_dashboard')
    else:
        form = TestimoniesForm()

    return render(request, 'dashboard/add_testimony.html', {'form': form})

@login_required(login_url='login_user')
def edit_testimony(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    testimony = get_object_or_404(Testimonies, id=id)
    if request.method == 'POST':
        form = TestimoniesForm(request.POST, request.FILES, instance=testimony)
        if form.is_valid():
            form.save()
            messages.success(request, 'Testimony updated successfully!')
            return redirect('testimonials_dashboard')
    else:
        form = TestimoniesForm(instance=testimony)
    return render(request, 'dashboard/edit_testimony.html', {'form': form, 'testimony':testimony})
    

@login_required(login_url='login_user')
def delete_testimony(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    testimony = get_object_or_404(Testimonies, id=id)
    testimony.delete()
    messages.success(request, 'Testimony deleted successfully!')
    return redirect('testimonials_dashboard')

@login_required(login_url='login_user')
def services_dashboard(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    services = Service.objects.all()
    return render(request, 'dashboard/services.html', {'services':services})



@login_required(login_url='login_user')
def add_service(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    if request.method == 'POST':
        form = ServiceForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Service added successfully!')
            return redirect('services_dashboard')
    else:
        form = ServiceForm()
    return render(request, 'dashboard/add_service.html', {'form': form})


@login_required(login_url='login_user')
def delete_service(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    service = get_object_or_404(Service, id=id)
    service.delete()
    messages.success(request, 'Service deleted successfully!')
    return redirect('services_dashboard')


@login_required(login_url='login_user')
def edit_service(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    service = get_object_or_404(Service, id=id)
    if request.method == 'POST':
        form = ServiceForm(request.POST, request.FILES, instance=service)
        if form.is_valid():
            form.save()
            messages.success(request, 'Service updated successfully!')
            return redirect('services_dashboard')
    else:
        form = ServiceForm(instance=service)
    return render(request, 'dashboard/edit_service.html', {'form': form, 'service':service})

@login_required(login_url='login_user')
def team_dashboard(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    teams = Team.objects.all()
    return render(request, 'dashboard/team.html', {'teams': teams})

@login_required(login_url='login_user')
def add_team(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    if request.method == 'POST':
        form = TeamForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Team created successfully!')
            return redirect('team_dashboard')
        else:
            messages.success(request, 'Correct the errors below!')
            return render(request, 'dashboard/add_team.html', {'form': form})
    else:
        form = TeamForm()
    return render(request, 'dashboard/add_team.html', {'form': form})

@login_required(login_url='login_user')
def edit_team(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    team = get_object_or_404(Team, id=id)
    if request.method == 'POST':
        form = TeamForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Team updated successfully!')
            return redirect('team_dashboard')
        else:
            messages.success(request, 'Correct the errors below!')
            return render(request, 'dashboard/add_team.html', {'form': form})
    else:
        form = TeamForm(instance=team)
    return render(request, 'dashboard/add_team.html', {'form': form})

@login_required(login_url='login_user')
def delete_team(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    team = get_object_or_404(Team, id=id)
    team.delete()
    messages.success(request, 'Team deleted successfully!')
    return redirect('team_dashboard')

@login_required(login_url='login_user')
def products_dashboard(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    products = Product.objects.all()
    return render(request, 'dashboard/products.html', {'products': products})

@login_required(login_url='login_user')
def add_project(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'project created successfully!')
            return redirect('products_dashboard')
        else:
            messages.success(request, 'Correct the errors below!')
            return render(request, 'dashboard/add_project.html', {'form': form})
    else:
        form = ProductForm()
    return render(request, 'dashboard/add_project.html', {'form': form})

@login_required(login_url='login_user')
def edit_project(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    project = get_object_or_404(Product, id=id)
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'product updated successfully!')
            return redirect('products_dashboard')
        else:
            messages.success(request, 'Correct the errors below!')
            return render(request, 'dashboard/edit_project.html', {'form': form})
    else:
        form = ProductForm(instance=project)
    return render(request, 'dashboard/edit_project.html', {'form': form})

@login_required(login_url='login_user')
def delete_project(request, id):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')
    
    product = get_object_or_404(Product, id=id)
    product.delete()
    messages.success(request, 'product deleted successfully!')
    return redirect('products_dashboard')

class ContactsListView(ListView):
    model = Contact
    template_name = 'contacts.html'
    context_object_name = 'contacts'
    queryset = Contact.objects.all().order_by('-created_at')


