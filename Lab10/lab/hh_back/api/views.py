
import stat
from urllib import response
from api import serializers
from api.models import Company, Vacancy 
from api.serializers import CompanySerializer1, VacancySerializer1, VacancySerializer2 
from rest_framework import status 
from rest_framework.decorators import api_view 
from rest_framework.response import Response 

from django.shortcuts import Http404 
from rest_framework.views import APIView 



# Create your views here.
#CRUD - Create, Read, Update, Delete 

#COMPANIES - FUNCTION BASED VIEWS 

#list of all companies 
@api_view(['GET', 'POST'])
def company_list(request): 

    if request.method == 'GET': 
        companies = Company.objects.all() 
        serializer = CompanySerializer1(companies, many=True)
        return Response(serializer.data)  

    if request.method == 'POST': #create 
        serializer = CompanySerializer1(data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    

#company by id 
@api_view(['GET', 'PUT', 'DELETE']) 
def company_details(request, company_id): 
    try: 
        company = Company.objects.get(id = company_id) 
    except Company.DoesNotExist as e: 
        return Response({'error': str(e)} , status=status.HTTP_400_BAD_REQUEST)  
    
    if request.method == 'GET': 
        serializer = CompanySerializer1(company) 
        return serializer.data
    
    elif request.method == 'PUT': #update an existing resource 
        serializer = CompanySerializer1(instance=company, data=request.data)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'DELETE': #delete data 
        company.delete() 
        return Response({'deleted': True})


#VACANCIES - CLASS BASED VIEWS
class VacancyListAPIView(APIView): 
    def get(self,request): 
        vacancies = Vacancy.objects.all() 
        serializer = VacancySerializer2(vacancies, many=True) 
        return Response(serializer.data)

    def post(self,request): #create 
        serializer = VacancySerializer2(data=request.data) 
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    

 #vacancy by id 
class VacancyDetailAPIView(APIView): 
    def get_object(self, vacancy_id): 
        try: 
            return Company.objects.get(pk=vacancy_id) 
        except Company.DoesNotExist as e: 
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST) 
        
    def get(self, request, vacancy_id): 
        instance = self.get_object(vacancy_id) 
        serializer = VacancySerializer2(instance) 
        return Response(serializer.data)
    
    def put(self, request, company_id): #update 
        instance = self.get_object(company_id) 
        serializer = VacancySerializer2(instance, data=request.data)  
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    def delete(self, request, vacancy_id): 
        instance = self.get_object(vacancy_id) 
        instance.delete()
        return Response({'deleted': True})


class VacanciesByCompanyAPIView(APIView): 
    def get_object(self, company_id): 
        try: 
            return Company.objects.get(pk = company_id)
        except Company.DoesNotExist as e: 
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, company_id):
        vacancies = Vacancy.objects.filter(company = self.get_object(company_id))
        serializer = VacancySerializer2(vacancies, many = True) 
        return Response(serializer.data) 

    def post(self, request, company_id): 
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid(): 
            if serializer.validated_data.get('company')!= company_id: 
                return Response({"error": "Invalid company ID"}, status=status.HTTP_400_BAD_REQUEST) 
            serializer.save() 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(['GET'])
def top_ten_vac(request):
    if request.method == 'GET': 
        ten_vac = Vacancy.objects.order_by('-salary')[:10] 
        serializer = VacancySerializer1(ten_vac, many=True) 
        return Response(serializer.data) 
    