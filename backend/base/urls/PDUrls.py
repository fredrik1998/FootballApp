from django.urls import path
from base.views import PDViews as views

urlpatterns = [
    path('', views.league_PD, name='league-PD'),
    path('topscorer/', views.top_scorers_PD, name='topscorer-PD'),
    path('topassists/', views.top_assists_PD, name='topassists-PD'),
    path('upcomingmatches/', views.league_PD_upcomming_matches, name='upcomingmatches-PD'),
    path('latestmatches/', views.league_PD_latest_matches, name='latestmatches-PD')
]