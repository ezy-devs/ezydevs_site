from django.contrib import admin
from .models import *
# Register your models here.

class TestimoniesAdmin(admin.ModelAdmin):
    list_display = ('name', 'designation', 'created_at')
    search_fields = ('name', 'designation')
    list_filter = ('created_at',)
    ordering = ('-created_at',)
    list_per_page = 10
    date_hierarchy = 'created_at'
    fieldsets = (
        (None, {
            'fields': ('name', 'designation', 'content', 'image')
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': ('created_at',),
        }),
    )

#class ServiceAdmin(admin.ModelAdmin):
#    list_display = ('title', 'description', 'created_at')
#    search_fields = ('title', 'description')
#    list_filter = ('created_at',)
#    ordering = ('-created_at',)

admin.site.register(Testimonies, TestimoniesAdmin)
#admin.site.register(Services, ServicesAdmin)
admin.site.register(Team)
#admin.site.register(Product)
