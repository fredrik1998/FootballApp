import React, { useEffect, useRef } from 'react';
import GlobalStyle from '../../GlobalStyles';
import Header from '../../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamSquad } from '../../slice/TeamSquadSlice';
import { StyledWrapper, StyledTable, StyledH1, StyledLogo, StyledLink } from './TeamElements';
import Loader from '../../components/Loader/Loader';
import { useParams } from 'react-router-dom';


const Team = () => {
  const dispatch = useDispatch();
  const TeamSquad = useSelector((state) => state.TeamSquad.data);
  const TeamSquadStatus = useSelector((state) => state.TeamSquad.status);
  const TeamSquadError = useSelector((state) => state.TeamSquad.error);
  const prevTeamId = useRef(null)
  const { team_id } = useParams();

  useEffect(() => {
    if(TeamSquadStatus === 'idle' || team_id !== prevTeamId.current){
        prevTeamId.current = team_id
        dispatch(fetchTeamSquad(team_id))
    }
   
  }, [TeamSquadStatus, dispatch, team_id]);

  console.log(TeamSquad)

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledWrapper>
        {TeamSquadStatus === 'loading' ? (
          <Loader />
        ) : (
            <>
            <StyledH1>{TeamSquad.name}</StyledH1>
            <StyledLogo src={TeamSquad.crest} ></StyledLogo>
            <h2>Squad</h2>
          <StyledTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Nationality</th>
                <th>Birthday</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(TeamSquad.squad) &&
                TeamSquad.squad.map((player) => {
                  return (
                    <tr key={player.id}>
                      <td>
                        <StyledLink to={`/player/${player.id}`}>{player.name}</StyledLink>
                      </td>
                      <td>{player.position}</td>
                      <td>{player.nationality}</td>
                      <td>{player.dateOfBirth}</td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
          </>
        )}
      </StyledWrapper>
    </>
  );
};

export default Team;
