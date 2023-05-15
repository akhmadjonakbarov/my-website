from django.db import models

# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=250)
    icon = models.FileField(upload_to="skill-icons")

    def __str__(self) -> str:
        return str(self.name)
