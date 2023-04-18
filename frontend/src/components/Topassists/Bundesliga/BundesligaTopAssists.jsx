import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBundesligaTopAssists } from '../../../slice/BundesligaSlice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper } from './BundesligaTopAssistsElements'

const BundesligaTopAssists = () => {
    const dispatch = useDispatch();
    const BundesligaTopAssists = useSelector((state) => state.Bundesliga.topAssists)
    const BundesligaTopAssistsStatus = useSelector((state) => state.Bundesliga.topAssistsStatus)
    const BundesligaTopAssistsError = useSelector((state) => state.Bundesliga.topAssistsError)
    const Bundesliga = useSelector((state) => state.Bundesliga.table)

    useEffect(() => {
        if(BundesligaTopAssistsStatus === 'idle'){
            dispatch(fetchBundesligaTopAssists());
        }
    }, [BundesligaTopAssistsStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.crest
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    }

    return (
      <>
        {BundesligaTopAssistsStatus === 'loading' ? (
          <Loader />
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
                {BundesligaTopAssists.map((player) => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
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
    );
  }
    

export default BundesligaTopAssists