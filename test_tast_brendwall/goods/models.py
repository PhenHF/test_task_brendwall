from django.db import models


class ProductModel(models.Model):
    name = models.CharField(max_length=200, verbose_name='Наименование товара')
    description = models.TextField(verbose_name='Описание товара')
    price = models.IntegerField(verbose_name='Цена')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self) -> str:
        return f'{self.name}'
