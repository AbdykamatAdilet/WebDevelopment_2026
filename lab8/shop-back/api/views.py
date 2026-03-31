from django.http import JsonResponse
from .models import Category, Product

def category_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({"id": category.id, "name": category.name})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

def product_list(request):
    products = Product.objects.all()
    data = [{
        "id": p.id, 
        "name": p.name, 
        "price": p.price, 
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category.name
    } for p in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({
            "id": p.id, "name": p.name, "price": p.price, 
            "description": p.description, "count": p.count, "is_active": p.is_active
        })
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)

def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = [{"id": p.id, "name": p.name, "price": p.price} for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
