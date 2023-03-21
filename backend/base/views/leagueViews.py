from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import League
from django.http import Http404
from ..serializer import LeagueSerializer
import requests


premier_league = League(name='Premier League', country='England', season=2022, start_date='2022-08-12', end_date='2023-05-22')
premier_league.save()

serie_a = League(name='Serie A', country='Italy', season=2022, start_date='2022-08-21', end_date='2023-05-28')
serie_a.save()

bundesliga = League(name='Bundesliga', country='Germany', season=2022, start_date='2022-08-13', end_date='2023-05-20')
bundesliga.save()

ligue_1 = League(name='Ligue 1', country='France', season=2022, start_date='2022-08-05', end_date='2023-05-21')
ligue_1.save()

la_liga = League(name='La Liga', country='Spain', season=2022, start_date='2022-08-13', end_date='2023-05-28')
la_liga.save()

champions_league = League(name='Champions League', country='Europe', season=2022, start_date='2022-09-13', end_date='2023-05-28')
champions_league.save()

@api_view(['GET'])
def league_PL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v2/competitions/PL/standings'
    response = requests.get(url, headers=headers)
    standings = response.json()['standings'][0]['table']
    return Response(standings)

@api_view(['GET'])
def team_logo(request, team_id):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v2/teams/{team_id}'
    response = requests.get(url, headers=headers)
    if response.status_code == 404:
        raise Http404()
    logo_url = response.json()['crestUrl']
    return Response({'logoUrl': logo_url})


@api_view(['GET'])
def next_matchday(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        matches.append({
            'home_team': match['homeTeam']['name'],
            'away_team': match['awayTeam']['name'],
            'kickoff_time': match['utcDate'],
            'status': match['status']
        })
    matches = matches[:20] 
    return Response(matches)


@api_view(['GET'])
def league_CL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v2/competitions/CL/standings'
    response = requests.get(url, headers=headers)
    standings = {}
    for group in response.json()['standings']:
        standings[group['group']] = group['table']
    return Response(standings)

@api_view(['GET'])
def league_CL_upcoming_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v2/competitions/CL/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = data['matches'][:8]
    return Response(matches)

@api_view(['GET'])
def top_scores(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v2/competitions/PL/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scores = []
    for scorer in scorers:
        top_scores.append({
            'name': scorer['player']['name'],
            'team': scorer['team']['name'],
            'goals': scorer['numberOfGoals'],
            'nationality': scorer['player']['nationality'],
            'position': scorer['player']['position'],
        })
    return Response(top_scores)

@api_view(['GET'])
def top_scores_CL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v2/competitions/CL/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scores_CL = []
    for scorer in scorers:
        top_scores_CL.append({
            'name': scorer['player']['name'],
            'team': scorer['team']['name'],
            'goals': scorer['numberOfGoals'],
            'nationality': scorer['player']['nationality'],
            'position': scorer['player']['position'], 
        })
    return Response(top_scores_CL)





