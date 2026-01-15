from django.contrib import admin
from .models import SignupEvent
@admin.register(SignupEvent)
class ProductEventAdmin(admin.ModelAdmin):
    list_display = ('product', 'organization', 'channel', 'created_at')
    search_fields = ('product', 'organization__name', 'created_by__email')
    list_filter = ('created_at',)
