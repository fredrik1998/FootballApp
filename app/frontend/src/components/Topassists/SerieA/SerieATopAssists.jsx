import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSerieATopAssists } from '../../../slice/SerieASlice'
import Loader from '../../Loader/Loader'
import { StyledWrapper, StyledTable, StyledLink } from './SerieATopAssistsElements'

const SerieATopAssists = () => {
  const dispatch = useDispatch()
  const SerieATopAssists = useSelector((state) => state.SerieA.topAssists);
  const SerieATopAssistsStatus = useSelector((state) => state.SerieA.topAssistsStatus);
  const SerieATopAssistsError = useSelector((state) => state.SerieA.topAssistsError);
  const SerieA = useSelector((state) => state.SerieA.table);

  useEffect(() => {
    if(SerieATopAssistsStatus === 'idle'){
      dispatch(fetchSerieATopAssists())
    }
  }, [SerieATopAssistsStatus, dispatch])

  const getTeamLogo = (teamName) => {
    for(const team of SerieA){
      if(team.team.name === teamName){
        return team.team.crest
      }
    }
    return ''
  }

  const getTeamId = (teamName) => {
    for(const team of SerieA){
      if(team.team.name === teamName){
        return team.team.id
      }
    }
  }

  return (
    <>
    {SerieATopAssistsStatus === 'loading' ? (
      <Loader/>
    ) : (
      <StyledWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
          {SerieATopAssists.map((player) => (
  <tr key={player.id}>
    <td>
      <StyledLink to={`/player/${player.id}`}>{player.name}</StyledLink>
    </td>
    <td>
      <img src={getTeamLogo(player.team)} width={30}></img>
      <StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink>
    </td>
    <td>{player.assists}</td>
  </tr>
))}
          </tbody>
        </StyledTable>
      </StyledWrapper>
    )}
    </>
  )
}

export default SerieATopAssists