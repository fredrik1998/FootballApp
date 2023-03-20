from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class League(models.Model):
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    season = models.IntegerField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

class Player(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    age = models.IntegerField()
    position = models.CharField(max_length=200)
    team = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Team(models.Model):
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    league = models.ForeignKey(League, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
