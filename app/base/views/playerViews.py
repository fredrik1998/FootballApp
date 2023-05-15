from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

@api_view(['GET'])
def get_player(request, player_id):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/persons/{player_id}'
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        player_data = response.json()
        return Response(player_data)
    else:
        return Response({'Error' : 'Unable to fetch data'})
    
