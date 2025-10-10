from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('testimonials', views.testimonials_dashboard, name='testimonials_dashboard'),
    path('testimonials/add', views.add_testimony, name='add_testimony'),
    path('testimonials/edit/<int:id>', views.edit_testimony, name='edit_testimony'),
    path('testimonials/delete/<int:id>', views.delete_testimony, name='delete_testimony'),
    path('services', views.services_dashboard, name='services_dashboard'),
    path('services/add', views.add_service, name='add_service'),
    path('services/edit/<int:id>', views.edit_service, name='edit_service'),
    path('services/delete/<int:id>', views.delete_service, name='delete_service'),
    path('team', views.team_dashboard, name='team_dashboard'),
    path('team/add', views.add_team, name='add_team'),
    path('team/edit/<uuid:id>', views.edit_team, name='edit_team'),
    path('team/delete/<uuid:id>', views.delete_team, name='delete_team'),
    path('products', views.products_dashboard, name='products_dashboard'),
    path('product/add', views.add_product, name='add_product'),
    path('product/edit/<uuid:id>', views.edit_product, name='edit_product'),
    path('product/delete/<uuid:id>', views.delete_product, name='delete_product'),

    path('blog', views.dashboard_blog_list, name='dashboard_blog_list'),
    path('blog/create', views.dashboard_blog_create, name='dashboard_blog_create'),
    path('blog/edit/<int:post_id>', views.dashboard_blog_edit, name='dashboard_blog_edit'),
    path('blog/delete/<int:post_id>', views.dashboard_blog_delete, name='dashboard_blog_delete'),
    path('contacts', views.contacts_dashboard, name='contacts_dashboard'),  
    path('contacts/<int:pk>', views.dashboard_contact_detail, name='dashboard_contact_detail'),

    #path('categories/', views.categories_dashboard, name='categories_dashboard'),
    #path('categories/add/', views.add_category, name='add_category'),
    #path('categories/edit/<uuid:id>', views.edit_category, name='edit_category'),
    #path('categories/delete/<uuid:id>', views.delete_category, name='delete_category'),

]