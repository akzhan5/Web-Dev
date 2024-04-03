from django.db import models

# Create your models here.

class Category(models.Model): 
    name = models.CharField(max_length = 255) 

    def to_json(self): 
        return {
            'name': self.name 
        }

class Product(models.Model):
    name = models.CharField(max_length = 255)  
    price = models.FloatField() 
    description = models.TextField() 
    count = models.PositiveIntegerField() 
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', null = True)

    def to_json(self): 
        return {
            'name': self.name, 
            'price': self.price, 
            'category': self.category.name 
        } #dict for json formatting




