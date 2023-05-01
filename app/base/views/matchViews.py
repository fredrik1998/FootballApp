from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

@api_view(['GET'])
def get_match(request, match_id):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/matches/{match_id}'
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        match_data = response.json()
        return Response(match_data)
    else:
        return Response({'Error' : 'Unable to fetch data'})
    
@api_view(['GET'])
def today_matches(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/matches'
    
    today = datetime.now().strftime('%Y-%m-%d')
    tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
    params = {
        'dateFrom': today,
        'dateTo': tomorrow,
    }
    response = requests.get(url, headers=headers, params=params)
    if response.status_code == 200:
        data = response.json()
        matches = data['matches']
    else:
        matches = []

    return Response({'matches': matches})

@api_view(['GET'])
def get_head_2_head(request, match_id):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/matches/{match_id}/head2head'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        matches = response.json()
        return Response(matches)
    else:
        return Response({'Error' : 'Unable to fetch head2head data'})
    
     