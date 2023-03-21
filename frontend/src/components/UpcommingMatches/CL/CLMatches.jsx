import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader';

const CLMatches = () => {
    const [upcommingMatches, setUpcommingMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        axios.get('api/leagues/CL/upcommingmatches/')
        .then(response => {
            const upcommingMatchesData = response.data
            setUpcommingMatches(upcommingMatchesData)
            setIsLoading(false)
        }).catch(console.error())
    }, [])
    
  return (
    <>
    {isLoading ? (
        <Loader/>
    ) : (
        <div>
        <h2>Upcomming matches</h2>
        <table>
        <thead>
            <tr>
                <td>Stage</td>
                <td>Hometeam</td>
                <td>Awayteam</td>
                <td>Date</td>
            </tr>
            <tbody>
            {upcommingMatches.map((match, index) => {
                  const date = new Date(match.utcDate);
                  const formattedDate = date.toLocaleDateString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit' });
    return(
        <tr key={index}>
        <td>{match.stage}</td>
        <td>{match.homeTeam.name}</td> 
        <td>{match.awayTeam.name}</td> 
        <td>{formattedDate}</td>
        </tr>
    )
})}
            </tbody>
        </thead>
    </table>
    </div>
    )}
    </>
  )
}

export default CLMatches