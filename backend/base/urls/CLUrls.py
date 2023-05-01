from django.urls import path
from base.views import CLViews as views

urlpatterns = [
    path('', views.league_CL, name='PL'),
    path('nextmatches/', views.league_CL_upcoming_matches, name='CL-next-matches'),
    path('topscorer/', views.top_scores_CL, name='league-topscorer'),
    path('topassits/', views.top_assists_CL, name='CL-topassists'),
    path('upcommingmatches/', views.league_CL_upcoming_matches),
    path('latestmatches/', views.league_CL_latest_matches, name='CL-latest-matches'),
]
