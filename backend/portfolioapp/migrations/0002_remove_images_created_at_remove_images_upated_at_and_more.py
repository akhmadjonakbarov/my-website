# Generated by Django 4.2.1 on 2023-05-15 03:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='images',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='images',
            name='upated_at',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='upated_at',
        ),
        migrations.RemoveField(
            model_name='tag',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='tag',
            name='upated_at',
        ),
    ]
