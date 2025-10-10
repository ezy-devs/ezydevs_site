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