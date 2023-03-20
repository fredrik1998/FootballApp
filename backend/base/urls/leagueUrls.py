from django.urls import path
from . import views

urlpatterns = [
    path('leagues/', views.league_list, name='league_list'),
]
