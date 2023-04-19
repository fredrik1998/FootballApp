import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlayerData } from '../../slice/playerSlice'
import Loader from '../../components/Loader/Loader'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { StyledWrapper } from './PlayerElements'

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
                <img style={{marginTop: '12px'}} src={Player.currentTeam.crest} width={30} height={30}></img>
                <h2>{Player.currentTeam.name}</h2>
                </>
            )}
        </div>
        </StyledWrapper>
    )}
    </>
  )
}

export default Player 