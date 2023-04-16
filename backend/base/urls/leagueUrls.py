from django.urls import path
from base.views import leagueViews as views

urlpatterns = [
    path('teams/<int:team_id>/logo/', views.team_logo, name='team_logo'),
    path('leagues/PL/', views.league_PL, name='PL'),
    path('leagues/PL/nextmatches/', views.next_matchday, name='PL-next-matches'),
    path('leagues/CL/', views.league_CL, name='CL'),
    path('leagues/topscorer/', views.top_scores, name='league-topscorer'),
    path('leagues/CL/topscorer/', views.top_scores_CL, name='CL-topscorer'),
    path('leagues/CL/upcommingmatches/', views.league_CL_upcoming_matches, name='CL-upcomming-matches'),
    path('leageus/CL/topassits/', views.top_assists_CL, name='CL-topassists'),
    path('leagues/PL/topassits/', views.top_assists_PL, name='PL-topassists'),
    path('leagues/CL/latestmatches/', views.league_CL_latest_matches, name='CL-latest'),
    path('leagues/PL/latestmatches/', views.league_PL_latest_matches, name='PL-latest-matches'),
    path('team/<int:team_id>/', views.get_team_squad, name='get_team_squad'),
    path('leagues/', views.get_all_leagues, name='get_all_leagues'),
    path('leagues/SA/', views.league_SA, name='SA'),
    path('leagues/SA/topscorer/', views.top_scores_SA, name='SA-topscorer'),
    path('leagues/SA/upcommingmatches/', views.league_SA_upcomming_matches, name='SA-upcommingmatches'),
    path('leagues/SA/topassists/', views.get_top_assists_SA, name='SA-topassists'),
    path('leagues/SA/upcommingmatches/', views.league_SA_upcomming_matches, name='SA-upcommingmatches'),
    path('leagues/SA/latestmatches/', views.league_SA_latest_matches, name='SA-latestmatches'),
    path('leagues/BL/', views.league_BL, name='BL'),
    path('leagues/BL/topscorer/', views.top_scorers_BL, name='BL-topscorer'),
    path('leagues/BL/topassists/', views.top_assists_BL, name='BL-topassists'),
    path('leagues/BL/upcommingmatches/', views.league_BL_upcomming_matches, name='BL-upcommingmatches'),
    path('leagues/BL/latestmatches/', views.league_BL_latest_matches, name='BL-latestmatches'),
    path('leagues/FL/', views.league_FL, name='FL-league'),
    path('leagues/FL/topscorer/', views.top_scorers_FL, name='FL-topscorer'),
    path('leagues/FL/topassists/', views.top_assists_FL, name='FL-topassists')
]
