from django.db import models
import uuid


class Service(models.Model):
		name = models.CharField(max_length=100)
		description = models.TextField()
		icon = models.CharField(max_length=100, blank=True, null=True)  # Optional icon field
		created_at = models.DateTimeField(auto_now_add=True)
		updated_at = models.DateTimeField(auto_now=True)

		def __str__(self):
				return self.name

		class Meta:
				verbose_name_plural = "Services"
				ordering = ['name']
class Partner(models.Model):
		id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
		name = models.CharField(max_length=100)
		logo = models.ImageField(upload_to='partners/logos/')
		website = models.URLField(blank=True, null=True)
		created_at = models.DateTimeField(auto_now_add=True)
		updated_at = models.DateTimeField(auto_now=True)

		def __str__(self):
				return self.name

		class Meta:
				verbose_name_plural = "Partners"
				ordering = ['name']

class TeamMember(models.Model):
    # Core Information
    full_name = models.CharField(max_length=255)
    role = models.CharField(max_length=100)  # e.g., CTO, Sales Lead, Frontend Developer
    bio = models.TextField(blank=True)
    
    # Media (This uses the MEDIA_ROOT we just configured)
    image = models.ImageField(upload_to='team_pics/', null=True, blank=True)
    
    # Social Links
    linkedin_url = models.URLField(max_length=500, blank=True)
    github_url = models.URLField(max_length=500, blank=True)
    twitter_url = models.URLField(max_length=500, blank=True)

    # Ordering & Display
    priority = models.IntegerField(default=10)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['priority', 'full_name']

    def __str__(self):
        return f"{self.full_name} - {self.role}"