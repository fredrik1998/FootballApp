from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import League
from django.http import Http404
from ..serializer import LeagueSerializer
import requests

@api_view(['GET'])
def league_PL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PL/standings'
    response = requests.get(url, headers=headers)
    standings = response.json()['standings'][0]['table']
    return Response(standings)

@api_view(['GET'])
def league_SA(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/standings'
    response = requests.get(url, headers=headers)
    standings = response.json()['standings'][0]['table']
    return Response(standings)

@api_view(['GET'])
def league_BL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/standings'
    response = requests.get(url, headers=headers)
    standings = response.json()['standings'][0]['table']
    return Response(standings)

@api_view(['GET'])
def league_FL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/FL1/standings'
    response = requests.get(url, headers=headers)
    standings = response.json()['standings'][0]['table']
    return Response(standings)

@api_view(['GET'])
def team_logo(request, team_id):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/teams/{team_id}'
    response = requests.get(url, headers=headers)
    if response.status_code == 404:
        raise Http404()
    logo_url = response.json()['crestUrl']
    return Response({'logoUrl': logo_url})


@api_view(['GET'])
def next_matchday(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED'
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
    url = 'https://api.football-data.org/v4/competitions/CL/standings'
    response = requests.get(url, headers=headers)
    standings = {}
    for group in response.json()['standings']:
        standings[group['group']] = group['table']
    return Response(standings)


@api_view(['GET'])
def league_CL_upcoming_matches(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = data['matches'][:8]
    return Response(matches)

@api_view(['GET'])
def league_SA_upcomming_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/SA/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        matches.append({
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status': match['status']
        })
        matches = matches[:20]
    return Response(matches)

@api_view(['GET'])
def league_BL_upcomming_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/matches?status=SCHEDULED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        matches.append({
            'home_team': match['homeTeam']['name'],
            'away_team': match['awayTeam']['name'],
            'kickoff_time': match['utcDate'],
            'status': match['status'],
        })
    matches = matches[:18]
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
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status': match['status'],
            'home_team_score': home_goals,
            'away_team_score': away_goals,
        })
    matches = matches[-20:] 
    return Response(matches)

@api_view(['GET'])
def league_PL_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PL/matches?status=FINISHED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        home_goals = match['score']['fullTime']['home'] if 'home' in match['score']['fullTime'] else None
        away_goals = match['score']['fullTime']['away'] if 'away' in match['score']['fullTime'] else None
        matches.append({
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status': match['status'],
            'home_team_score': home_goals,
            'away_team_score': away_goals,
        })
    matches = matches[-20:]
    return Response(matches)

@api_view(['GET'])
def league_CL_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'} 
    url = 'https://api.football-data.org/v4/competitions/CL/matches?=status=FINISHED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        home_goals = match['score']['fullTime']['home'] if 'home' in match['score']['fullTime'] else None
        away_goals = match['score']['fullTime']['away'] if 'away' in match['score']['fullTime'] else None
        matches.append({
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status': match['status'],
            'home_team_score': home_goals,
            'away_team_score': away_goals,
        })
    matches = matches[-20:]
    return Response(matches)

@api_view(['GET'])
def league_BL_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/matches?=status=FINISHED'
    response = requests.get(url, headers=headers)
    data = response.json()
    matches = []
    for match in data['matches']:
        home_goals = match['score']['fullTime']['home'] if 'home' in match['score']['fullTime'] else None
        away_goals = match['score']['fullTime']['away'] if 'away' in match['score']['fullTime'] else None
        matches.append({
            'home_team': match['homeTeam']['shortName'],
            'away_team': match['awayTeam']['shortName'],
            'kickoff_time': match['utcDate'],
            'status' : match['status'],
            'home_team_score': home_goals,
            'away_team_score' : away_goals,
        })
   
    return Response(matches)       

@api_view(['GET'])
def top_scores(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PL/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scores = []
    for scorer in scorers:
        try:
            top_scores.append({
                'name': scorer['player']['name'],
                'team': scorer['team']['name'],
                'goals': scorer['goals'],
                'nationality': scorer['player']['nationality'],
                'position': scorer['player']['position'],
            })
        except KeyError as e:
            print(f"Error processing scorer data: {scorer}, KeyError: {e}")
    return Response(top_scores)

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
                'name': scorer['player']['name'],
                'team': scorer['team']['name'],
                'goals': scorer['goals'],
                'nationality': scorer['player']['nationality'],
                'position': scorer['player']['position'],
            })
        except KeyError as e:
            print(f"Error fetching data scorer data: {scorer}, KeyError: {e}")
    return Response(top_scorers)         
        
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
                'name': scorer['player']['name'],
                'team': scorer['team']['name'],
                'goals': scorer['goals'],
                'nationality': scorer['player']['nationality'],
                'position': scorer['player']['position'],
            })
        except KeyError as e:
            print(f"Error processing scorer data: {scorer}, KeyError: {e}")
    return Response(top_scores_CL)

@api_view(['GET'])
def top_scorers_BL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scorers = []
    for scorer in scorers:
        try:
            top_scorers.append({
            'name' : scorer['player']['name'],
            'team' : scorer['team']['name'],
            'goals' : scorer['goals'],
            'nationality' : scorer['player']['nationality'],
            'position' : scorer['player']['position']
        })
        except KeyError as e:
            print(f"Error fetching data {scorer}, KeyError: {e} ")
    return Response(top_scorers)

@api_view(['GET'])
def top_scorers_FL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/FL1/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scorers = []
    for scorer in scorers:
        try:
            top_scorers.append({
            'name': scorer['player']['name'],
            'team': scorer['team']['name'],
            'goals': scorer['goals'],
            'nationality': scorer['player']['nationality'],
            'position': scorer['player']['position']
        })
        except KeyError as e:
            print(f"Error fetching scorer data {scorer} Keyerror as {e}")
    return Response(top_scorers) 

@api_view(['GET'])
def top_assists_FL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/FL1/scorers?sort=assists'
    response = requests.get(url, headers=headers)
    assisters = response.json()['scorers'][:10]
    sorted_assisters = sorted(assisters, key=lambda x: x['assists'], reverse=True)[:10]
    top_assists = []
    for assister in sorted_assisters:
        try:
            top_assists.append({
                'name': assister['player']['name'],
                'team': assister['team']['name'],
                'assists': assister['assists'],
                'nationality': assister['player']['nationality'],
                'position' : assister['player']['position']
            })
        except KeyError as e:
            print(f"Error fetching assists data {assister}. Keyerror as {e}")
    return Response(top_assists)                       
    
@api_view(['GET'])
def top_assists_BL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/scorers?sort=assists'
    response = requests.get(url, headers=headers)
    assisters = response.json()['scorers'][:10]
    sorted_assisters = sorted(assisters, key=lambda x: x['assists'], reverse=True)[:10]
    top_assists = []
    for assister in sorted_assisters:
        try:
            top_assists.append({
                'name': assister['player']['name'],
                'team': assister['team']['name'],
                'assists': assister['assists'],
                'nationality': assister['player']['nationality'],
                'position': assister['player']['position'],
            })
        except KeyError as e:
            print(f"Error processing assister data: {assister}, KeyError: {e}")
    return Response(top_assists)

     
@api_view(['GET'])
def top_assists_PL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PL/scorers?sort=assists'
    response = requests.get(url, headers=headers)
    assisters = response.json()['scorers'][:10]
    sorted_assisters = sorted(assisters, key=lambda x: x['assists'], reverse=True)[:10]
    top_assists = []
    for assister in sorted_assisters:
        try:
            top_assists.append({
                'name': assister['player']['name'],
                'team': assister['team']['name'],
                'assists': assister['assists'],
                'nationality': assister['player']['nationality'],
                'position': assister['player']['position'],
            })
        except KeyError as e:
            print(f"Error processing assister data: {assister}, KeyError: {e}")
    return Response(top_assists)

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
def get_all_leagues(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/'    
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        league_data = response.json()
        return Response(league_data)
    else:
        return Response({'error' : 'Unable to fetch data'})
        


        













