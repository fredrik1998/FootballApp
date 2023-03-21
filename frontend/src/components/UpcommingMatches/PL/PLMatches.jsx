import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PLMatches = () => {
    const [upcommingMatches, setUpcommingMatches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('api/leagues/PL/nextmatches/')
        .then(response => {
            const upcommingMatchesData = response.data
            setUpcommingMatches(upcommingMatchesData)
            setIsLoading(false);
        }).catch(console.error())
    },[])
  return (
    <>
    {isLoading ? (
       <></>
    ) : (
        <div>
         <h2>Upcomming matches</h2>
        <table>
        <thead>
            <tr>
                <th>Hometeam</th>
                <th>Awayteam</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {upcommingMatches.map((match, index) => {
                 const date = new Date(match.kickoff_time);
                 const formattedDate = date.toLocaleDateString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit' });
                return(
                <tr key={index}>
                    <td>{match.home_team}</td>
                    <td>{match.away_team}</td>
                    <td>{formattedDate}</td>
                </tr>
            )})}
        </tbody>
    </table>
    </div>
    )}
    
    </>
  )
}

export default PLMatches