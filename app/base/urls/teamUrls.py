from django.urls import path
from base.views import teamViews as views

urlpatterns = [
    path('<int:team_id>/', views.get_team_squad, name='get-team-squad'),
    path('upcomingmatches/<int:team_id>/', views.get_team_upcoming_matches, name='team-upcomingmatches'),
    path('latestmatches/<int:team_id>/', views.get_team_latest_matches, name='team-latestmatches'),
]