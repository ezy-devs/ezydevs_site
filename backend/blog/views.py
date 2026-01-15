from django.shortcuts import render
from .forms import PostForm
from .models import Post
from django.shortcuts import get_object_or_404, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView, DetailView

class BlogListView(ListView):
		model = Post
		template_name = 'blog/blog_list.html'
		context_object_name = 'posts'
		paginate_by = 5

		def get_queryset(self):
				return Post.objects.filter(status='published').order_by('-published_at')

class BlogDetailView(DetailView):
		model = Post
		template_name = 'blog/blog_detail.html'
		context_object_name = 'post'
		def get_context_data(self, **kwargs):
				context = super().get_context_data(**kwargs)
				post = self.get_object()
				keywords_list = [kw.strip() for kw in post.keywords.split(',')] if post.keywords else []
				context['keywords_list'] = keywords_list
				return context

		def get_object(self):
				slug = self.kwargs.get('slug')
				post = get_object_or_404(Post, slug=slug, status='published')
				keywords_list = [kw.strip() for kw in post.keywords.split(',')] if post.keywords else []
				return post
