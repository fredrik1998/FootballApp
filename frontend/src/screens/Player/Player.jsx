import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlayerData } from '../../slice/playerSlice'
import Loader from '../../components/Loader/Loader'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { StyledWrapper, StyledImage, StyledDiv } from './PlayerElements'
import {Typography } from '@mui/material'
const Player = () => {
    const dispatch = useDispatch();
    const Player = useSelector((state) => state.Player.data);
    const PlayerStatus = useSelector((state) => state.Player.status);
    const PlayerError = useSelector((state) => state.Player.error)
    const prevPlayerId = useRef(null)
    const { player_id } = useParams();

    useEffect(() => {
        if(PlayerStatus === 'idle' || player_id !== prevPlayerId.current){
            prevPlayerId.current = player_id
            dispatch(fetchPlayerData(player_id))
        }
    }, [dispatch, player_id, PlayerStatus])

    const calculateAge = (birthday) => {
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
      
        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
      
        return age;
      }

  return (
    <>
    <GlobalStyle/>
    <Header/>
    {PlayerStatus === 'loading' ? (
        <Loader/>
    ) : (
        <StyledWrapper>
        <h1>{Player.name}</h1>
        <div style={{display: 'flex'}}>
            {Player.currentTeam && (
                <>
                <StyledImage src={Player.currentTeam.crest}></StyledImage>
                <h2>{Player.currentTeam.name}</h2>
                </>
            )}
        </div>
        <Typography>Country: {Player.nationality}</Typography>
        <Typography>Shirtnumber: {Player.shirtNumber}</Typography>
        <Typography>Position: {Player.position}</Typography>
        <Typography>Age:{calculateAge(Player.dateOfBirth)}</Typography>
        <StyledDiv>
        <h2>Competitions:</h2>
  {Player.currentTeam && Array.isArray(Player.currentTeam.runningCompetitions) &&
    Player.currentTeam.runningCompetitions.map((competition) => {
      return (
        <div key={competition.id}>
          <h3>{competition.name}</h3>
          <img src={competition.emblem} width={100} alt={competition.name} />
        </div>
      );
  })}
</StyledDiv>

        </StyledWrapper>
    )}
    </>
  )
}

export default Player 