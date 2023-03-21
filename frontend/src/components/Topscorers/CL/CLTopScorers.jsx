import { Fab } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../../GlobalStyles'
import Header from '../../Header/Header'

const CLTopScorers = () => {
    const [topScorers, setTopScorers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('api/leagues/CL/topscorer/')
        .then(response => {
            const topScorersData = response.data
            setTopScorers(topScorersData)
            setIsLoading(false)
        }).catch(console.error())
    }, [])
  return (
    <>
    <GlobalStyle/>
    {isLoading ? (
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
            {topScorers.map((player) => {
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