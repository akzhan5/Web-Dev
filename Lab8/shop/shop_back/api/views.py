from django.shortcuts import render
from django.http.response import JsonResponse 
from api.models import Product, Category

# Create your views here.
def product_list(request):  #all the products 
    # select from api_product 
    products = Product.objects.all() 
    products_json = [p.to_json() for p in products] 
    return JsonResponse(products_json, safe=False) #not dict obj can be serialized 

def category_list(request): # all the categories 
    #select from api_category 
    categories = Category.objects.all() 
    categories_json = [c.to_json() for c in categories] 
    return JsonResponse(categories_json, safe=False) 

def get_product(request, p_id): # one product based on the id 
    # select from api_product where id="product_id" 
    try: 
        product = Product.objects.get(id = p_id)
    except Product.DoesNotExist as e: 
        return JsonResponse({'error': str(e)}, status = 400) 
    
    #return JsonResponse(product.to_json, status = 200, safe = False) 
    return JsonResponse(product.to_json(), status = 200, safe = False) 

def get_category(request, category_id): # one category based on the id 
    # select from api_product where id="product_id" 
    try: 
        category = Category.objects.get(id = category_id) 
    except Category.DoesNotExist as e: 
        return JsonResponse({'error': str(e)}, status = 400) 
    
    return JsonResponse(category.to_json(), status = 200) 

def get_products_of_category(request, category_id): #products based on the cat id 

    try: 
        categ = Category.objects.get(id = category_id)
    except Category.DoesNotExist as e: 
        return JsonResponse({'error': str(e)}, status = 400) 
    
    products_in_category = Product.objects.filter(category = categ)
    prods_json = [p.to_json() for p in products_in_category]

    return JsonResponse(prods_json, safe=False) 
    