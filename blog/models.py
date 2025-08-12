from django.db import models
#from django.utils.text import slugify
#from django.urls import reverse

#class Post(models.Model):
#    STATUS_CHOICES = (
#        ('draft', 'Draft'),
#        ('published', 'Published'),
#    )

#    title = models.CharField(max_length=255, unique=True)
#    slug = models.SlugField(max_length=255, unique=True, blank=True)
#    author = models.CharField(max_length=100, default='Ezydevs Team')
#    content = models.TextField()
#    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    
#    # SEO fields
#    meta_description = models.CharField(max_length=160, blank=True)
#    keywords = models.CharField(max_length=255, blank=True)

#    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
#    created_at = models.DateTimeField(auto_now_add=True)
#    updated_at = models.DateTimeField(auto_now=True)
#    published_at = models.DateTimeField(blank=True, null=True)

#    class Meta:
#        ordering = ['-published_at', '-created_at']
#        verbose_name = "Blog Post"
#        verbose_name_plural = "Blog Posts"

#    def __str__(self):
#        return self.title

#    def save(self, *args, **kwargs):
#        if not self.slug:
#            self.slug = slugify(self.title)
#        super().save(*args, **kwargs)

#    def get_absolute_url(self):
#        return reverse('blog_detail', kwargs={'slug': self.slug})
