from django.urls import path
from base.views import playerViews as views

urlpatterns = [
    path('<int:player_id>/', views.get_player, name='get-player')
]