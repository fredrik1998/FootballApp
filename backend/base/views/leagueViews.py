from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import League
from django.http import Http404
from ..serializer import LeagueSerializer
from datetime import datetime, timedelta
import requests
from django.views.decorators.cache import cache_page

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
def league_PD(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PD/standings'
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
            'id': match['id'],
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
            'id': match['id'],
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
            'id': match['id'],
            'home_team': match['homeTeam']['name'],
            'away_team': match['awayTeam']['name'],
            'kickoff_time': match['utcDate'],
            'status': match['status'],
        })
    matches = matches[:18]
    return Response(matches)

@api_view(['GET'])
def league_FL_upcomming_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/FL1/matches?status=SCHEDULED'
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
def league_PD_upcomming_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PD/matches?status=SCHEDULED'
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

@api_view(['GET'])
def league_PD_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PD/matches?status=FINISHED'
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

@api_view(['GET'])
def league_BL_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/matches?status=FINISHED'
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
            'status' : match['status'],
            'home_team_score': home_goals,
            'away_team_score' : away_goals,
        })
    matches = matches[-20:]
    return Response(matches)

@api_view(['GET'])
def league_FL_latest_matches(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/FL1/matches?status=FINISHED'
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
            'home_team_score' : home_goals,
            'away_team_score' : away_goals,
        })
    matches = matches[-20:]
    return Response(matches)    

@api_view(['GET'])
def top_scores_PL(request):
    headers = {'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PL/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scores = []
    for scorer in scorers:
        try:
            top_scores.append({
                'id': scorer['player']['id'],
                'name': scorer['player']['name'],
                'team': scorer['team']['shortName'],
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
def top_scorers_BL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/BL1/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scorers = []
    for scorer in scorers:
        try:
            top_scorers.append({
            'id' : scorer['player']['id'],   
            'name' : scorer['player']['name'],
            'team' : scorer['team']['shortName'],
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
            'id': scorer['player']['id'],   
            'name': scorer['player']['name'],
            'team': scorer['team']['shortName'],
            'goals': scorer['goals'],
            'nationality': scorer['player']['nationality'],
            'position': scorer['player']['position']
        })
        except KeyError as e:
            print(f"Error fetching scorer data {scorer} Keyerror as {e}")
    return Response(top_scorers) 

@api_view(['GET'])
def top_scorers_PD(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PD/scorers'
    response = requests.get(url, headers=headers)
    scorers = response.json()['scorers'][:10]
    top_scorers = []
    for scorer in scorers:
        try:
            top_scorers.append({
                'id': scorer['player']['id'],
                'name' : scorer['player']['name'],
                'team' : scorer['team']['shortName'],
                'goals' : scorer['goals'],
                'nationality': scorer['player']['nationality'],
                'position' :scorer['player']['position']
            })
        except KeyError as e:
            print(f"Error fetching scorer data {scorer}. Keyerror as {e}")  
    return Response(top_scorers)          

@api_view(['GET'])
def top_assists_FL(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/FL1/scorers?sort=assists'
    response = requests.get(url, headers=headers)
    assisters = response.json()['scorers'][:10]
    sorted_assisters = sorted(assisters, key=lambda x: x['assists'] or 0, reverse=True)[:10]
    top_assists = []
    for assister in sorted_assisters:
        try:
            top_assists.append({
                'id': assister['player']['id'],
                'name': assister['player']['name'],
                'team': assister['team']['shortName'],
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
                'id': assister['player']['id'],
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
                'id': assister['player']['id'],
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
def top_assists_PD(request):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = 'https://api.football-data.org/v4/competitions/PD/scorers?sort=assists'
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
                'position': assister['player']['position']
            })
        except KeyError as e:
            print(f"Error fetching assists data {assister}. Keyerror as {e}")
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
def get_head_2_head(request, match_id):
    headers = {'X-Auth-Token' : '58d5d5351e7444a2815fcbb0b0a058b9'}
    url = f'https://api.football-data.org/v4/matches/{match_id}/head2head'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        matches = response.json()
        return Response(matches)
    else:
        return Response({'Error' : 'Unable to fetch head2head data'})
    
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
 
    
    

        


        













