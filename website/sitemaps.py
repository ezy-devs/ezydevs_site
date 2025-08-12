from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
#from blog.models import Post  # if you have a blog app
from products.models import Product
# Static pages
class StaticViewSitemap(Sitemap):
    priority = 0.8
    changefreq = 'monthly'

    def items(self):
        return ['home', 'about', 'services', 'contact']  # URL pattern names

    def location(self, item):
        return reverse(item)

class ProductsSitemap(Sitemap):
    priority = 0.8
    changefreq = 'monthly'

    def items(self):
        return ['products_list']  # URL pattern names

    def location(self, item):
        return reverse(item)

## Blog posts
#class BlogSitemap(Sitemap):
#    changefreq = 'weekly'
#    priority = 0.9

#    def items(self):
#        return Post.objects.filter(status='published')  # adjust for your model

#    def lastmod(self, obj):
#        return obj.updated_at  # field storing last update date
