from django.urls import path
from base.views import BLViews as views

urlpatterns = [
    path('', views.league_BL, name='League-BL'),
    path('topscorer/', views.top_scorers_BL, name='topscorer-BL'),
    path('topassists/', views.top_assists_BL, name='topassists-BL'),
    path('upcommingmatches/', views.league_BL_upcomming_matches, name='upcomingmatches-BL'),
    path('latestmatches/', views.league_BL_latest_matches, name='BL-latestmatches')
]