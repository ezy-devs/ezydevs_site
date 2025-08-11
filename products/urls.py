# urls.py
from django.urls import path
from .views import ProductListView, ProductDetailView, ProductCreateView, ProductUpdateView, ProductDeleteView

urlpatterns = [
    path('', ProductListView.as_view(), name='products_list'),
    path('<slug:slug>/', ProductDetailView.as_view(), name='product_detail'),
    path('add/', ProductCreateView.as_view(), name='add_product'),
    path('edit/<slug:slug>/', ProductUpdateView.as_view(), name='edit_product'),
    path('delete/<slug:slug>/', ProductDeleteView.as_view(), name='delete_product'),
]
