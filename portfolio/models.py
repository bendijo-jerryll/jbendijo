from django.db import models

# Create your models here.
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tools = models.CharField(max_length=200)
    github_link = models.URLField(blank=True)

    def __str__(self):
        return self.title
