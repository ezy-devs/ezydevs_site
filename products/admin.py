from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
		list_display = ('name', 'slug', 'is_available', 'created_at')
		search_fields = ('name', 'slug')
		prepopulated_fields = {'slug': ('name',)}
		list_filter = ('is_available', 'created_at')
		ordering = ('-created_at',)

		fieldsets = (
				(None, {
						'fields': ('name', 'slug', 'short_description', 'detailed_description', 'image', 'is_available')
				}),
				('Advanced options', {
						'classes': ('collapse',),
						'fields': ('created_at',),
				}),
		)
