from django.urls import path
from base.views import matchViews as views

urlpatterns = [
    path('<int:match_id>/', views.get_match, name='get_match'),
    path('todaysmatches/', views.today_matches, name='todaysmatches'),
    path('<int:match_id>/head2head/', views.get_head_2_head, name='match-head2head')
]