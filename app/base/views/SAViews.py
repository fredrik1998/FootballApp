from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

@api_view(['GET'])
def league_SA(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/standings'
    response = requests.get(url, headers=headers)
    standings = response.json()['standings'][0]['table']
    return Response(standings)

@api_view(['GET'])
def top_scores_SA(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scorers = []
    for scorer in scorers:
        try:
            top_scorers.append({
                'id': scorer['player']['id'],
                'name': scorer['player']['name'],
                'team': scorer['team']['shortName'],
                'goals': scorer['goals'],
                'nationality': scorer['player']['nationality'],
                'position': scorer['player']['position'],
            })
        except KeyError as e:
            print(f"Error fetching data scorer data: {scorer}, KeyError: {e}")
    return Response(top_scorers)   

@api_view(['GET'])
def get_top_assists_SA(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/scorers?sort=assists'
    response = requests.get(url, headers=headers)
    assisters = response.json()['scorers'][:10]
    sorted_assisters = sorted(assisters, key=lambda x: x['assists'], reverse=True)[:10]
    top_assists = []
    for assister in sorted_assisters:
        try:
            top_assists.append({
                'id' : assister['player']['id'],
                'name' : assister['player']['name'],
                'team' : assister['team']['name'],
                'assists': assister['assists'],
                'nationality' : assister['player']['nationality'],
                'position': assister['player']['position']   
            })
        except KeyError as e:
            print(f"Error processing assister data: {assister}, KeyError: {e}")
    return Response(top_assists)   

@api_view(['GET'])
def league_SA_upcomming_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        matches.append({
            'id': match['id'],
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status': match['status']
        })
        matches = matches[:20]
    return Response(matches)

@api_view(['GET'])
def league_SA_latest_matches(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/matches?status=FINISHED'
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