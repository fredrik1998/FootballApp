import { Style } from "@mui/icons-material";
import {
  FormBoxContainer,
  WinBox,
  LossBox,
  DrawBox,
  StyledH1,
  AwayTeamLogo,
  StyledLink,
} from "./TeamFormElements";

const TeamForm = ({ form }) => {
  return (
    <>
      <FormBoxContainer>
        {form.map((matchResult, index) => {
          if (matchResult.result === "W") {
            return (
              <StyledLink to={`/match/${matchResult.id}`}>
                <WinBox key={index}>{matchResult.score}</WinBox>
                <AwayTeamLogo src={matchResult.crest}></AwayTeamLogo>
              </StyledLink>
            );
          } else if (matchResult.result === "L") {
            return (
              <StyledLink to={`/match/${matchResult.id}`}>
                <LossBox key={index}>{matchResult.score}</LossBox>
                <AwayTeamLogo src={matchResult.crest}></AwayTeamLogo>
              </StyledLink>
            );
          } else {
            return (
              <StyledLink to={`/match/${matchResult.id}`}>
                <DrawBox key={index}>{matchResult.score}</DrawBox>
                <AwayTeamLogo src={matchResult.crest}></AwayTeamLogo>
              </StyledLink>
            );
          }
        })}
      </FormBoxContainer>
    </>
  );
};

export default TeamForm;
