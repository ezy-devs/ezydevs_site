from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import sitemaps
from django.contrib.sitemaps.views import sitemap
from django.views.generic import TemplateView 
from website.sitemaps import StaticViewSitemap, ProductsSitemap

sitemaps_dict = {
    'static': StaticViewSitemap,
    'products': ProductsSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API and App Routes (Keep these at the top)
    path('auth/', include('accounts.urls')),
    path('api/contacts/', include('contacts.urls')), # Changed from '' to 'contacts/' to avoid conflict
    path('products/', include('products.urls')),
    path('dashboard/', include('dashboard.urls')),
    path('blog/', include('blog.urls')),
    path('api/website/', include('website.urls')), # Consider prefixing backend logic with api/
    
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps_dict}, name='django.contrib.sitemaps.views.sitemap'),

    # re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

urlpatterns += static('/images/', document_root=settings.BASE_DIR.parent / 'frontend' / 'public' / 'images')

# 2. ADD THIS: Serve Django Media if you use the Database model later
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))]