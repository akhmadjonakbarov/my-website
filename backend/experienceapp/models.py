from django.db import models

# Create your models here.


class Experience(models.Model):
    started_date = models.DateTimeField()
    ended_date = models.DateTimeField()
    name = models.CharField(max_length=250)
    company = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self) -> str:
        return str(self.name)
