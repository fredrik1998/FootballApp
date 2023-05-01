from django.urls import path
from base.views import generalViews as views

urlpatterns = [
    path('teams/', views.get_all_teams, name='get-all-teams'),
    path('leagues/', views.get_all_leagues, name='get-all-leagues'),
]

