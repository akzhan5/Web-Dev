from django.shortcuts import render
import json 
from django.views.decorators.csrf import csrf_exempt 
from django.http.response import JsonResponse 
from api.models import Company, Vacancy 
# Create your views here.
#CRUD - Create, Read, Update, Delete 

#list of all companies 
@csrf_exempt 
def company_list(request): 

    if request.method == 'GET': 
        companies = Company.objects.all() 
        companies_json = [c.to_json() for c in companies] 
        return JsonResponse(companies_json, safe=False) 

    if request.method == 'POST': #insert 
        data = json.loads(request.body) 
        company_name = data.get('name', '') #get the name 
        company = Company.objects.create(name = company_name) #create an obj comp
        return JsonResponse(company.to_json()) 
    

#list of all vacancies 
@csrf_exempt 
def vacancy_list(request): 
    if request.method == 'GET': 
        vacancies = Vacancy.objects.all() 
        vacancies_json = [v.to_json() for v in vacancies] 
        return JsonResponse(vacancies_json, safe = False) 

#company by id 
@csrf_exempt 
def company_details(request, company_id): 
    try: 
        company = Company.objects.get(id = company_id) 
    except Company.DoesNotExist as e: 
        return JsonResponse({'error': str(e)} , status = 400) 
    
    if request.method == 'GET': 
        return JsonResponse(company.to_json()) 
    elif request.method == 'PUT': #update an existing resource 
        data = json.loads(request.body)
        # if no new name, keep the same one 
        new_comp_name = data.get('name', company.name) #get(assign value get name, default val)
        company.name = new_comp_name #change the name 
        company.save()  
        return JsonResponse(company.to_json()) 
    elif request.method == 'DELETE': 
        company.delete() 
        return JsonResponse({'deleted': True})
 
 #vacancy by id 
@csrf_exempt 
def vacancy_details(request, vacancy_id): 
    try: 
        vacancy = Vacancy.objects.get(id = vacancy_id) 
    except Vacancy.DoesNotExist as e: 
        return JsonResponse({'error': str(e)}, status = 400) 
    
    if request.method == 'GET': 
        return JsonResponse(vacancy.to_json()) 
    elif request.method == 'PUT': #update 
        data = json.loads(request.body) 
        new_vac_name = data.get('name', vacancy.name) 
        vacancy.name = new_vac_name 
        vacancy.save() 
        return JsonResponse(vacancy.to_json()) 
    elif request.method == 'DELETE': 
        vacancy.delete() 
        return JsonResponse({'deleted': True}) 
    
@csrf_exempt 
def vacancies_by_company(request, company_id): 
    try: 
        company = Company.objects.get(id = company_id) 
    except Company.DoesNotExist as e: 
        return JsonResponse({'error': e}, status = 400) 
    
    vacancies = Vacancy.objects.filter(company = company) 
    vacancies_json = [v.to_json() for v in vacancies] 
    
    if request.method == 'GET': #get 
        return JsonResponse(vacancies_json, safe = False) 
    
    elif request.method == 'POST': #insert 
        data = json.loads(request.body) 
        vac_name = data.get('name', '')
        vacancy = Vacancy.objects.create(name = vac_name) 
        return JsonResponse(vacancy.to_json())


@csrf_exempt 
def top_ten_vac(request):
    if request.method == 'GET': 
        ten_vac = Vacancy.objects.order_by('-salary')[:10] 
        vac_json = [v.to_json() for v in ten_vac] 
        return JsonResponse(vac_json, safe=False) 
    
    
