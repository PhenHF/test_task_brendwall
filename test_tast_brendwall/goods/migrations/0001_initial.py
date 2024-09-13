# Generated by Django 5.1.1 on 2024-09-12 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Наименование товара')),
                ('description', models.TextField(verbose_name='Описание товара')),
                ('price', models.IntegerField(verbose_name='Цена')),
            ],
        ),
    ]
