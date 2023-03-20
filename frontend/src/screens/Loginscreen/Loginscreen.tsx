import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { State, AppDispatch} from '../../store'
import { login } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import GlobalStyle from '../../GlobalStyles';
import { 
  LoginWrapper,
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledInput, 
  StyledLink, 
  StyledButton,
  StyledButtonContainer,
  StyledError,
  
} from './LoginscreenElements';


const Loginscreen: React.FC = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  })

  const [isDisabled, setIsDisabled] = useState(true)

  const userLogin = useSelector((state: State) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const errors: typeof formErrors = { email: '', password: '' };
    if(!email){
      errors.email = 'Email is required'
    }
    if(!password){
      errors.password = 'Password is required'
    }
    setFormErrors(errors);
    if(Object.keys(errors).length === 0){
      dispatch(login(email, password))
    
    }
  }

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  useEffect(() => {
    setIsDisabled(Object.keys(formErrors).length > 0)
  }, [formErrors])

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <LoginWrapper>
        <StyledForm onSubmit={submitHandler}>
        <StyledTitle>Sign in</StyledTitle>
          <StyledLabel>Useremail</StyledLabel>
          <StyledInput 
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          placeholder='eg. Fredrik Andrén'
          >
          </StyledInput>
          <StyledError>{formErrors.email}</StyledError>
          <StyledLabel>Password</StyledLabel>
          <StyledInput 
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          >
          </StyledInput>
          <StyledError>{formErrors.password}</StyledError>
          <StyledButtonContainer>
          <StyledButton type='submit'>Login</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
        <StyledLink to='/register'>Dont have an account? click here</StyledLink>
      </LoginWrapper>
    </>
  );
};

export default Loginscreen;
