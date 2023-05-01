from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import League
from django.http import Http404
from ..serializer import LeagueSerializer
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

@api_view(['GET'])
def league_CL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/CL/standings'
    response = requests.get(url, headers=headers)
    standings = {}
    for group in response.json()['standings']:
        standings[group['group']] = group['table']
    return Response(standings)

@api_view(['GET'])
def top_scores_CL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/CL/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scores_CL = []
    for scorer in scorers:
        try:
            top_scores_CL.append({
                'id': scorer['player']['id'],
                'name': scorer['player']['name'],
                'team': scorer['team']['shortName'],
                'goals': scorer['goals'],
                'nationality': scorer['player']['nationality'],
                'position': scorer['player']['position'],
            })
        except KeyError as e:
            print(f"Error processing scorer data: {scorer}, KeyError: {e}")
    return Response(top_scores_CL)

@api_view(['GET'])
def top_assists_CL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/CL/scorers?sort=assists'
    response = requests.get(url, headers=headers)
    assisters = response.json()['scorers'][:10]
    sorted_assisters = sorted(assisters, key=lambda x: x['assists'] or 0, reverse=True)[:10]
    top_assists = []
    for assister in sorted_assisters:
        try:
            top_assists.append({
                'id': assister['player']['id'],
                'name': assister['player']['name'],
                'team': assister['team']['name'],
                'assists': assister['assists'],
                'nationality': assister['player']['nationality'],
                'position': assister['player']['position'],
            })
        except KeyError as e:
            print(f"Error processing assiter data: {assister}, KeyError: {e}")
    return Response(top_assists)

@api_view(['GET'])
def league_CL_upcoming_matches(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = data['matches'][:8]
    return Response(matches)

@api_view(['GET'])
def league_CL_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'} 
    url = 'https://api.football-data.org/v4/competitions/CL/matches?status=FINISHED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        home_goals = match['score']['fullTime']['home'] if 'home' in match['score']['fullTime'] else None
        away_goals = match['score']['fullTime']['away'] if 'away' in match['score']['fullTime'] else None
        matches.append({
            'id': match['id'],
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status': match['status'],
            'home_team_score': home_goals,
            'away_team_score': away_goals,
        })
    matches = matches[-20:]
    return Response(matches)