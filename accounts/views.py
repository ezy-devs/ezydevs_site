from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, RedirectView, TemplateView
from .models import CustomUser
from .forms import CustomUserCreationForm, CustomUserLoginForm
from django.contrib import messages

# REGISTER VIEW
class RegisterView(CreateView):
    model = CustomUser
    form_class = CustomUserCreationForm
    template_name = "accounts/register.html"

    def get_success_url(self):
        if self.request.user.is_staff or self.request.user.is_superuser:
            return reverse_lazy("dashboard")
        return reverse_lazy("/")
    
    def form_valid(self, form):
        user = form.save(commit=False)
        user.save()
        login(self.request, user)  # auto-login after registration
        return super().form_valid(form)



# LOGIN VIEW
class UserLoginView(TemplateView):
    template_name = "accounts/login.html"
    def get(self, request):
        return render(request, self.template_name)
    def post(self, request):
        email = self.request.POST.get('email')
        password = self.request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard') if user.is_staff or user.is_superuser else redirect('/')
        else:
            messages.error(request, "Invalid email or password")
            return render(request, self.template_name, {'form': CustomUserLoginForm()})


#class UserLoginView(LoginView):
#    template_name = "accounts/login.html"
#    authentication_form = CustomUserLoginForm

#    def form_valid(self, form):
#        user = authenticate(
#            email=form.cleaned_data.get('email'),
#            password=form.cleaned_data.get('password')
#        )
#        if user is not None:
#            login(self.request, user)
#            return super().form_valid(form)
#        else:
#            form.add_error(None, "Invalid email or password")
#            return self.form_invalid(form)

#    def get_success_url(self):
#        if self.request.user.is_staff or self.request.user.is_superuser:
#            return reverse_lazy("dashboard")
#        return reverse_lazy("/")


# LOGOUT VIEW
class UserLogoutView(RedirectView):
    url = reverse_lazy("login")

    def get(self, request, *args, **kwargs):
        logout(request)
        return super().get(request, *args, **kwargs)
