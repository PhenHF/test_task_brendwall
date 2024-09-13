import json


from django.shortcuts import render
from django.views import View
from django.http import JsonResponse, HttpResponse, Http404


from .models import ProductModel
from .forms import ProductForm


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')


class ProductsView(View):
    model = ProductModel
    form_class = ProductForm

    def get_queryset(self):
        return self.model.objects.all()

    def get(self, request, *args, **kwargs):
        return JsonResponse(data=list(self.get_queryset().values()), safe=False)

    def post(self, request, *args, **kwargs):
        new_product = self.form_class(data=request.POST)

        if new_product.is_valid():
            new_product.save()
            return HttpResponse(status=201)

        return HttpResponse(json.dumps(new_product.errors), status=400)
