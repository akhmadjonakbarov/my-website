from django.db import models

# Create your models here.


class Portfolio(models.Model):
    name = models.CharField(max_length=300)
    tags = models.ManyToManyField('Tag', related_name="tags")

    def __str__(self) -> str:
        return str(self.name)


class Tag(models.Model):
    tag = models.CharField(max_length=15)

    def __str__(self) -> str:
        return str(self.tag)


class Images(models.Model):
    portfolio = models.ForeignKey(
        Portfolio, on_delete=models.CASCADE, related_name="set_images")
    image = models.ImageField(upload_to=f"images of {portfolio.name}")

    def __str__(self) -> str:
        return str(f"Images of {self.portfolio.name}")
