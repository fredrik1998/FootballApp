from django.urls import path
from base.views import SAViews as views

urlpatterns = [
    path('', views.league_SA, name='league-SA'),
    path('topscorer/', views.top_scores_SA, name='topscorer-SA'),
    path('topassists/', views.get_top_assists_SA, name='topassists-SA'),
    path('upcommingmatches/', views.league_SA_upcomming_matches, name='upcomingmatches'),
    path('latestmatches/', views.league_SA_latest_matches, name='latestmatches-SA')
]