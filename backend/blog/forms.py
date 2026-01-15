from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = [
            'title',
            'author',
            'content',
            'image',
            'meta_description',
            'keywords',
            'status',
        ]
        widgets = {
            'title': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400',
                'placeholder': 'Enter post title...',
            }),
            'author': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400',
                'placeholder': 'Author name...',
            }),
            'content': forms.Textarea(attrs={
                'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400',
                'rows': 8,
                'placeholder': 'Write your post content here...',
            }),
            'meta_description': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400',
                'placeholder': 'Meta description (for SEO)...',
            }),
            'keywords': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400',
                'placeholder': 'Keywords (comma-separated)...',
            }),
            'status': forms.Select(attrs={
                'class': 'w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none',
            }),
        }
        labels = {
            'title': 'Post Title',
            'author': 'Author',
            'content': 'Content',
            'image': 'Featured Image',
            'meta_description': 'Meta Description',
            'keywords': 'Keywords',
            'status': 'Status',
        }