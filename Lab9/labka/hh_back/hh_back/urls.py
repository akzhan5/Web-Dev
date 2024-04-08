"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('companies/', views.company_list), 
    path('vacancies/', views.vacancy_list), 
    path('companies/<int:company_id>/', views.company_details),
    path('vacancies/<int:vacancy_id>/', views.vacancy_details), 
    path('companies/<int:company_id>/vacancies/', views.vacancies_by_company), 
    path('vacancies/top_ten/', views.top_ten_vac) 
]
