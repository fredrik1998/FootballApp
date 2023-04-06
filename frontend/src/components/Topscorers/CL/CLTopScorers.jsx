import { Fab } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../../GlobalStyles'
import Header from '../../Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTopScorerCL } from '../../../slice/CLTopScorerSlice'

const CLTopScorers = () => {
    const dispatch = useDispatch()
    const CLTopScorer = useSelector((state) => state.CLTopScorer.data)
    const CLTopScorerStatus = useSelector((state) => state.CLTopScorer.status)
    const CLTopScorerError = useSelector((state) => state.CLTopScorer.error)

    useEffect(() => {
        if(CLTopScorerStatus === 'idle'){
            dispatch(fetchTopScorerCL())
        }
    }, [CLTopScorerStatus, dispatch])
    
  return (
    <>
    <GlobalStyle/>
    {CLTopScorerStatus === 'loading' ? (
        <></>
    ) : (
        <div>
        <h2>Top scorers</h2>
        <table>
        <thead>
            <tr>
                <td>Player</td>
                <td>Team</td>
                <td>Goals</td>
            </tr>
        </thead>
        <tbody>
            {CLTopScorer.map((player) => {
                return(
                <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.team}</td>
                    <td>{player.goals}</td>
                </tr>
            )})}
        </tbody>
    </table>
    </div>
    )}
   
    </>
  )
}

export default CLTopScorers