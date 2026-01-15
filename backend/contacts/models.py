from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"{self.name} - {self.subject}"


class PartnershipLead(models.Model):
    TIER_CHOICES = [
        ('ecosystem', 'Ecosystem Partner'),
        ('infrastructure', 'Infrastructure Partner'),
        ('strategic', 'Strategic Partner'),
    ]
    
    company_name = models.CharField(max_length=255)
    contact_person = models.CharField(max_length=255)
    email = models.EmailField()
    tier = models.CharField(max_length=20, choices=TIER_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.company_name} - {self.tier}"