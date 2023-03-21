import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CLMatches = () => {
    const [upcommingMatches, setUpcommingMatches] = useState([]);
    
    useEffect(() => {
        axios.get('api/leagues/CL/upcommingmatches/')
        .then(response => {
            const upcommingMatchesData = response.data
            setUpcommingMatches(upcommingMatchesData)
        }).catch(console.error())
    }, [])

    
  return (
    <>
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
    </>
  )
}

export default CLMatches