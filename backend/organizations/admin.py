from django.contrib import admin
from .models import Organization, Membership

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'created_at', 'slug')
    search_fields = ('name', 'owner__email')
    prepopulated_fields = {"slug": ("name",)}
    list_filter = ('created_at',)

@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    list_display = ('user', 'organization', 'role', 'status', 'joined_at')
    search_fields = ('user__email', 'organization__name')
    list_filter = ('status', 'role')

