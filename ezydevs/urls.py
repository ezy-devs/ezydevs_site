from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import sitemaps
from django.contrib.sitemaps.views import sitemap
from website.sitemaps import StaticViewSitemap, ProductsSitemap

sitemaps_dict = {
    'static': StaticViewSitemap,
    'products': ProductsSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('website.urls')),
    path('auth/', include('accounts.urls')),
    path('', include('contacts.urls')),
    path('products/', include('products.urls')),
    path('dashboard/', include('dashboard.urls')),


    path('sitemap.xml', sitemap, {'sitemaps': sitemaps_dict}, name='django.contrib.sitemaps.views.sitemap'),
]
# config static and media

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

		
