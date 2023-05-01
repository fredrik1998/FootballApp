from django.urls import path
from base.views import PLViews as views

urlpatterns = [
    path('', views.league_PL, name='PL'),
    path('nextmatches/', views.next_matchday, name='PL-next-matches'),
    path('topscorer/', views.top_scores_PL, name='league-topscorer'),
    path('topassits/', views.top_assists_PL, name='PL-topassists'),
    path('latestmatches/', views.league_PL_latest_matches, name='PL-latest-matches'),
]
