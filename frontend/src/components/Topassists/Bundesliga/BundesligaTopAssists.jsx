import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBundesligaTopAssists } from '../../../slice/BundesligaTopAssistsSlice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper } from './BundesligaTopAssistsElements'

const BundesligaTopAssists = () => {
    const dispatch = useDispatch();
    const BundesligaTopAssists = useSelector((state) => state.BundesligaTopAssists.data)
    const BundesligaTopAssistsStatus = useSelector((state) => state.BundesligaTopAssists.status)
    const BundesligaTopAssistsError = useSelector((state) => state.BundesligaTopAssists.error)
    const Bundesliga = useSelector((state) => state.Bundesliga.data)

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