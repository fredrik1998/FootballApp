from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

@cache_page(604800)
@api_view(['GET'])
def get_all_leagues(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/'
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        league_data = response.json()

        desired_leagues = [
            'Premier League',
            'UEFA Champions League',
            'Primera Division',
            'Ligue 1',
            'Bundesliga',
            'Serie A'
        ]
        
        filtered_league_data = [league for league in league_data['competitions'] if league['name'] in desired_leagues]

        return Response({'competitions': filtered_league_data})
    else:
        return Response({'error': 'Unable to fetch data'})
    
@cache_page(604800)
@api_view(['GET'])
def get_all_teams(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}

    desired_leagues = [
        'Premier League',
        'UEFA Champions League',
        'Primera Division',
        'Ligue 1',
        'Bundesliga',
        'Serie A'
    ]
    leagues_url = 'https://api.football-data.org/v4/competitions'
    leagues_response = requests.get(leagues_url, headers=headers)
    leagues_data = leagues_response.json()
    desired_league_ids = [league['id'] for league in leagues_data['competitions'] if league['name'] in desired_leagues]

    filtered_teams_data = []
    unique_team_ids = set()

    for league_id in desired_league_ids:
        url = f'https://api.football-data.org/v4/competitions/{league_id}/teams'
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            league_teams_data = response.json()
            for team in league_teams_data['teams']:
                if team['id'] not in unique_team_ids:
                    unique_team_ids.add(team['id'])
                    team_data = {
                        'id': team['id'],
                        'name': team['name'],
                        'crest': team['crest'],
                    }
                    filtered_teams_data.append(team_data)
        else:
            return Response({'Error': f'Unable to fetch teams for league ID {league_id}'})

    return Response(filtered_teams_data)
