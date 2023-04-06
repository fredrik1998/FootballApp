import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopScorerPL } from '../../slice/PLTopScorerSlice';

const TopScorers = () => {
  const dispatch = useDispatch()
  const PLTopScorer = useSelector((state) => state.PLTopScorer.data)
  const PLTopScorerStatus = useSelector((state) => state.PLTopScorer.status)
  const PLTopScorerError = useSelector((state) => state.PLTopScorer.error)

  useEffect(() => {
    if(PLTopScorerStatus === 'idle'){
      dispatch(fetchTopScorerPL())
    }
  }, [PLTopScorerStatus, dispatch])

  return (
    <div>
      {PLTopScorerStatus === 'loading' ? (
        <></>
      ) : (
        <>
        <h2>Top Scorers</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {PLTopScorer.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
      )}
      
    </div>
  );
}

export default TopScorers;
