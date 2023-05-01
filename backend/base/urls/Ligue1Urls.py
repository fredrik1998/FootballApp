from django.urls import path
from base.views import Ligue1Views as views

urlpatterns = [
    path('', views.league_FL, name = 'league-FL'),
    path('topscorer/', views.top_scorers_FL, name = 'FL-topscorer'),
    path('topassists/',views.top_assists_FL, name = 'FL-topassits'),
    path('upcommingmatches/', views.league_FL_upcomming_matches, name = 'FL-upcomingmatches'),
    path('latestmatches/', views.league_FL_latest_matches, name = 'FL-latestmatches'),
]