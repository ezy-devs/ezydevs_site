from django import forms
from .models import Product


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'slug', 'short_description', 'detailed_description', 'image', 'is_available']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'}),
            'slug': forms.TextInput(attrs={'class': 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'}),
            'short_description': forms.Textarea(attrs={'class': 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none', 'rows': 3}),
            'detailed_description': forms.Textarea(attrs={'class': 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none', 'rows': 6}),
            'is_available': forms.CheckboxInput(attrs={'class': 'h-5 w-5 text-primary focus:ring-primary'}),
        }
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['name'].label = "Product Name"
            self.fields['slug'].label = "Product Slug"
            self.fields['short_description'].label = "Short Description"
            self.fields['detailed_description'].label = "Detailed Description"
            self.fields['image'].label = "Product Image"
            self.fields['is_available'].label = "Is Available"