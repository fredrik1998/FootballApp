import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMatchData } from '../../slice/matchesSlice'
import Loader from '../../components/Loader/Loader'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'

const Match = () => {
    const dispatch = useDispatch();
    const Match = useSelector((state) => state.Match.data);
    const MatchStatus = useSelector((state) => state.Match.status);
    const MatchError = useSelector((state) => state.Match.error);
    const prevMatchId = useRef(null);
    const { match_id } = useParams();

    useEffect(() => {
        if(MatchStatus === 'idle' || match_id !== prevMatchId.current){
            prevMatchId.current = match_id
            dispatch(fetchMatchData(match_id))
        }
    }, [dispatch, MatchStatus, match_id])

  return (
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
}

export default Match