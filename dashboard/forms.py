from products.models import *
from website.models import *
from .models import *

from django import forms

class TestimoniesForm(forms.ModelForm):
    class Meta:
        model = Testimonies
        fields = ['name', 'designation', 'content', 'image']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Your name'}),
            'designation': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Your designation'}),
            'content': forms.Textarea(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'rows': 4, 'placeholder': 'Share your experience'}),
            'image': forms.ClearableFileInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'}),
        }
    
    def clean_image(self):
        image = self.cleaned_data.get('image')
        if image:
            MAX_SIZE = 5 * 1024 * 1024  # 5MB in bytes
            if image.size > MAX_SIZE:
                raise forms.ValidationError("Image size cannot be larger than 5MB.")
        return image
class ServiceForm(forms.ModelForm):
    class Meta:
        model = Service
        fields = ['name', 'description',  'icon']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Service title'}),
            'description': forms.Textarea(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'rows': 4, 'placeholder': 'Describe the service'}),
            'icon': forms.ClearableFileInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'FontAwesome icon class'}),
        }

class TeamForm(forms.ModelForm):
    class Meta:
        model = Team
        fields = ['name', 'designation', 'image', 'bio', 'social_links']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Your name'}),
            'designation': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Your designation'}),
            'image': forms.ClearableFileInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'FontAwesome icon class'}),
            'bio': forms.Textarea(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'rows': 4, 'placeholder': 'Describe the team member'}),
            'social_links': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'JSON format for social links'}),
        }
    
    def clean_image(self):
        image = self.cleaned_data.get('image')
        if image:
            MAX_SIZE = 5 * 1024 * 1024  # 5MB in bytes
            if image.size > MAX_SIZE:
                raise forms.ValidationError("Image size cannot be larger than 5MB.")
        return image

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'short_description', 'image', 'detailed_description']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Project title'}),
            'short_description': forms.Textarea(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'rows': 4, 'placeholder': 'Describe the project'}),
            'detailed_description': forms.URLInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Project link'}),
            'image': forms.ClearableFileInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'FontAwesome icon class'}),
        }
           
    
    def clean_image(self):
        image = self.cleaned_data.get('image')
        if image:
            MAX_SIZE = 5 * 1024 * 1024  # 5MB in bytes
            if image.size > MAX_SIZE:
                raise forms.ValidationError("Image size cannot be larger than 5MB.")
        return image

class PartnerForm(forms.ModelForm):
    class Meta:
        model = Partner
        fields = ['name', 'logo', 'website']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Partner name'}),
            'website': forms.URLInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Partner website'}),
            'logo': forms.ClearableFileInput(attrs={'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none', 'placeholder': 'Upload partner logo'}),
        }
    
    def clean_logo(self):
        logo = self.cleaned_data.get('logo')
        if logo:
            MAX_SIZE = 5 * 1024 * 1024  # 5MB in bytes
            if logo.size > MAX_SIZE:
                raise forms.ValidationError("Logo size cannot be larger than 5MB.")
        return logo
