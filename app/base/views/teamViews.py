from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

@api_view(['GET'])
def get_team_squad(request, team_id):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/teams/{team_id}'
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        team_data = response.json()
        return Response(team_data)
    else:
        return Response({'error': 'Unable to fetch data'})
    
@api_view(['GET'])
def get_team_upcoming_matches(request, team_id):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/teams/{team_id}/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        matches.append({
            'id': match['id'],
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'home_team_id': match['homeTeam']['id'],
            'away_team_id': match['awayTeam']['id'],
            'home_team_crest': match['homeTeam']['crest'],
            'away_team_crest': match['awayTeam']['crest'],
            'status': match['status'],
            'kickoff_time': match['utcDate']
        })
    matches = matches[:10]    
    return Response(matches)

@api_view(['GET'])
def get_team_latest_matches(request, team_id):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/teams/{team_id}/matches?status=FINISHED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        home_goals = match['score']['fullTime']['home'] if 'home' in match['score']['fullTime'] else None
        away_goals = match['score']['fullTime']['away'] if 'away' in match['score']['fullTime'] else None
        
        matches.append({
            'id': match['id'],
            'home_team': match['homeTeam']['shortName'],
            'away_team' : match['awayTeam']['shortName'],
            'home_team_id': match['homeTeam']['id'],
            'away_team_id': match['awayTeam']['id'],
            'home_team_crest': match['homeTeam']['crest'],
            'away_team_crest': match['awayTeam']['crest'],
            'status': match['status'],
            'kickoff_time': match['utcDate'],
            'home_team_score': home_goals,
            'away_team_score': away_goals
        })
    matches = matches[-10:]
    return Response(matches)        