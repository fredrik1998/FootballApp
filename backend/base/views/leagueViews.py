from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import League
from ..serializer import LeagueSerializer


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
def league_list(request):
    leagues = League.objects.all()
    serializer = LeagueSerializer(leagues, many=True)
    return Response(serializer.data)

