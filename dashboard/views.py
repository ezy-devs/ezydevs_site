from django.shortcuts import render,redirect, get_object_or_404
from .models import *
from website.models import *
from contacts.models import *
from products.models import *
from .forms import *
from django.contrib import messages
from django.views.generic import ListView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from blog.models import Post
from blog.forms import PostForm
from django.contrib.auth.decorators import user_passes_test, login_required
from django.core.paginator import Paginator
from django.db.models import Q


# restrict to staff users
def staff_required(view_func):
    return user_passes_test(lambda u: u.is_active and u.is_staff)(view_func)

class SuperUserPassesTestMixin(UserPassesTestMixin):
    def test_func(self):
        if self.request.user.is_superuser or self.request.user.is_staff:
            return True
        messages.error(request, "You are not authorized to access this page.")
        return redirect('home')



@login_required
@staff_required
def dashboard(request):
    
    return render(request, 'dashboard/dashboard.html')

class DashboardView(LoginRequiredMixin, SuperUserPassesTestMixin, TemplateView):
    template_name = 'dashboard/dashboard.html'
    

@login_required
@staff_required
def testimony_dashboard(request):
    
    testimonies = Testimonies.objects.all()
    return render(request, 'dashboard/testimonials.html', {'testimonies': testimonies})


@login_required
@staff_required
def add_testimony(request):
    title = "Add Testimony"
    if request.method == 'POST':
        form = TestimoniesForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('testimony_dashboard')
    else:
        form = TestimoniesForm()

    return render(request, 'dashboard/testimony_form.html', {'form': form, 'title': title})

@login_required
@staff_required
def edit_testimony(request, id):
    title = "Edit Testimony"
    testimony = get_object_or_404(Testimonies, id=id)
    if request.method == 'POST':
        form = TestimoniesForm(request.POST, request.FILES, instance=testimony)
        if form.is_valid():
            form.save()
            messages.success(request, 'Testimony updated successfully!')
            return redirect('testimony_dashboard')
    else:
        form = TestimoniesForm(instance=testimony)
    return render(request, 'dashboard/testimony_form.html', {'form': form, 'testimony': testimony, 'title': title})
    

@login_required
@staff_required
def delete_testimony(request, id):
    
    testimony = get_object_or_404(Testimonies, id=id)
    testimony.delete()
    messages.success(request, 'Testimony deleted successfully!')
    return redirect('testimony_dashboard')

@login_required
@staff_required
def services_dashboard(request):
    
    services = Service.objects.all()
    for service in services:
        print(service)
    return render(request, 'dashboard/services.html', {'services':services})



@login_required
@staff_required
def add_service(request):
    
    if request.method == 'POST':
        form = ServiceForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Service added successfully!')
            return redirect('services_dashboard')
    else:
        form = ServiceForm()
    return render(request, 'dashboard/add_service.html', {'form': form})


@login_required
@staff_required
def delete_service(request, id):
    
    service = get_object_or_404(Service, id=id)
    service.delete()
    messages.success(request, 'Service deleted successfully!')
    return redirect('services_dashboard')


@login_required
@staff_required
def edit_service(request, id):
    
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

@login_required
@staff_required
def team_dashboard(request):
    
    teams = Team.objects.all()
    return render(request, 'dashboard/team.html', {'teams': teams})

@login_required
@staff_required
def add_team(request):
    
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

@login_required
@staff_required
def edit_team(request, id):
    
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

@login_required
@staff_required
def delete_team(request, id):
    
    team = get_object_or_404(Team, id=id)
    team.delete()
    messages.success(request, 'Team deleted successfully!')
    return redirect('team_dashboard')



# Partners views



@login_required
@staff_required
def partners_dashboard(request):

    partners = Partner.objects.all()
    return render(request, 'dashboard/partners.html', {'partners': partners})

@login_required
@staff_required
def add_partner(request):
    title = "Add Partner"
    if request.method == 'POST':
        form = PartnerForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Partner added successfully!')
            return redirect('partners_dashboard')
    else:
        form = PartnerForm()
    return render(request, 'dashboard/partner_form.html', {'form': form, 'title': title})

@login_required
@staff_required
def edit_partner(request, id):
    title = "Edit Partner"
    partner = get_object_or_404(Partner, id=id)
    if request.method == 'POST':
        form = PartnerForm(request.POST, request.FILES, instance=partner)
        if form.is_valid():
            form.save()
            messages.success(request, 'Partner updated successfully!')
            return redirect('partners_dashboard')
    else:
        form = PartnerForm(instance=partner)
    return render(request, 'dashboard/partner_form.html', {'form': form, 'partner': partner, 'title': title})

@login_required
@staff_required
def delete_partner(request, id):

    partner = get_object_or_404(Partner, id=id)
    partner.delete()
    messages.success(request, 'Partner deleted successfully!')
    return redirect('partners_dashboard')


@login_required
@staff_required
def products_dashboard(request):
    
    products = Product.objects.all()
    return render(request, 'dashboard/products.html', {'products': products})

@login_required
@staff_required
def add_product(request):
    
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

@login_required
@staff_required
def edit_product(request, id):

    product = get_object_or_404(Product, id=id)
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

@login_required
@staff_required
def delete_product(request, id):
    
    product = get_object_or_404(Product, id=id)
    product.delete()
    messages.success(request, 'product deleted successfully!')
    return redirect('products_dashboard')

from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator

 # assuming you have a Contact model
@staff_required
@login_required
def contacts_dashboard(request):
    """
    Dashboard view for managing contact messages.
    Supports search and pagination.
    """
    query = request.GET.get('q', '')
    contacts = Contact.objects.all().order_by('-created_at')

    if query:
        contacts = contacts.filter(
            Q(name__icontains=query) |
            Q(email__icontains=query) |
            Q(subject__icontains=query)
        )

    paginator = Paginator(contacts, 10)  # Show 10 contacts per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'contacts': page_obj,
        'page_obj': page_obj,
        'is_paginated': page_obj.has_other_pages(),
        'query': query,
    }
    return render(request, 'contacts/contacts.html', context)

@login_required
def dashboard_contact_detail(request, pk):
    """
    Display full details of a contact message.
    Optionally mark as read when viewed.
    """
    contact = get_object_or_404(Contact, pk=pk)

    # Optional: mark message as read if your model has a 'is_read' field
    if hasattr(contact, 'is_read') and not contact.is_read:
        contact.is_read = True
        contact.save(update_fields=['is_read'])

    context = {
        'contact': contact,
    }
    return render(request, 'contacts/contact_detail.html', context)




@login_required
@staff_required
def dashboard_blog_list(request):
    qs = Post.objects.all().order_by('-published_at', '-created_at')
    paginator = Paginator(qs, 12)
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    recent_posts = qs[:6]
    context = {'posts': posts, 'recent_posts': recent_posts, 'is_paginated': posts.has_other_pages(), 'page_obj': posts}
    return render(request, 'dashboard/blog_list.html', context)

@login_required
@staff_required
def dashboard_blog_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save()
            messages.success(request, 'Post saved successfully.')
            return redirect('dashboard_blog_list')
    else:
        form = PostForm(initial={'author': request.user.get_full_name() or request.user.username})
    recent_posts = Post.objects.order_by('-created_at')[:6]
    return render(request, 'dashboard/blog_create.html', {'form': form, 'recent_posts': recent_posts})

@login_required
@staff_required
def dashboard_blog_edit(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            form.save()
            messages.success(request, 'Post updated.')
            return redirect('dashboard_blog_list')
    else:
        form = PostForm(instance=post)
    recent_posts = Post.objects.order_by('-created_at')[:6]
    return render(request, 'dashboard/blog_create.html', {'form': form, 'recent_posts': recent_posts, 'post': post})

@login_required
@staff_required
def dashboard_blog_delete(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.method == 'POST':
        post.delete()
        messages.success(request, 'Post deleted.')
        return redirect('dashboard_blog_list')
    # fallback: delete via GET with confirmation is handled client-side
    post.delete()
    messages.success(request, 'Post deleted.')
    return redirect('dashboard_blog_list')
