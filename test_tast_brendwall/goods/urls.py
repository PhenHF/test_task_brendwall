from django.urls import path


from . import views

app_name = 'goods'

urlpatterns = [
    path('', view=views.IndexView.as_view(), name='index'),
    path('goods/', view=views.ProductsView.as_view(), name='product')
]
