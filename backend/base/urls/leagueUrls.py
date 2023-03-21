from django.urls import path
from base.views import leagueViews as views

urlpatterns = [
    path('teams/<int:team_id>/logo/', views.team_logo, name='team_logo'),
    path('leagues/PL/', views.league_PL, name='PL'),
    path('leagues/PL/nextmatches/', views.next_matchday, name='PL-next-matches'),
    path('leagues/CL/', views.league_CL, name='CL'),
    path('leagues/topscorer/', views.top_scores, name='league-topscorer'),
    path('leagues/CL/topscorer/', views.top_scores_CL, name='CL-topscorer'),
    path('leagues/CL/upcommingmatches/', views.league_CL_upcoming_matches, name='CL-upcomming-matches')
]
