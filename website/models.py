from django.db import models

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