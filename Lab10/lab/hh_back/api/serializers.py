from email.policy import default
from rest_framework import serializers
from api.models import Company, Vacancy

class CompanySerializer1 (serializers.Serilizer): 
    id = serializers.IntegerField(read_only=True) 
    name = serializers.CharField() 

    def create(self, validated_data): 
        company = Company.objects.create(**validated_data) 
        return company

    def update(self, instance, validated_data): 
        instance.name = validated_data.get('name', instance.name) 
        instance.save()
        return instance 
    

class VacancySerializer1 (serializers.Serilizer): 
    id = serializers.IntegerField(read_only=True) 
    name = serializers.CharField() 

    def create(self, validated_data): 
        company = Vacancy.objects.create(**validated_data) 
        return company

    def update(self, instance, validated_data): 
        instance.name = validated_data.get('name', instance.name) 
        instance.save()
        return instance 
    

class VacancySerializer2 (serializers.ModelSerializer): 
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta: 
        model = Company 
        fields = ('id', 'name', 'user')  



