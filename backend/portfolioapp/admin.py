from django.contrib import admin
from .models import Portfolio, Tag, Images
# Register your models here.


class ImagesAdmin(admin.TabularInline):
    model = Images


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    inlines = [ImagesAdmin,]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
