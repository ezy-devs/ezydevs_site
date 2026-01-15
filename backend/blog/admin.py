from django.contrib import admin

from .models import Post
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
		list_display = ('title', 'author', 'status', 'published_at')
		list_filter = ('status', 'author')
		search_fields = ('title', 'content', 'author__username')
		prepopulated_fields = {'slug': ('title',)}
		ordering = ('-published_at',)
