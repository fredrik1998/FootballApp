import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledTitle, StyledWrapper, StyledError, StyledLink} from './RegisterscreenElements'
import { redirect, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { register } from '../../actions/userActions'
const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled]  = useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '', 
    })

    const submitHandler = (event) => {
        event.preventDefault();
        
        const errors = {};
        if(!name){
            errors.name = 'Name is required'
        }
        if(!email){
            errors.email = 'Email is required'
        }
        if(!password){
            errors.password = 'Password is required'
        }
        if(!confirmPassword){
            errors.confirmPassword = 'Password is required'
        }
        setFormErrors(errors)

        if(password !== confirmPassword){
            setMessage('Password does not match')
        } else {
            if(Object.keys(errors).length === 0){
                dispatch(register(name, email, password))
            }
        }
    }

    const redirect = location.search ? location.search.split('=')[1] : '/'


      const userRegister = useSelector(state => state.userRegister)
      const {error, loading, userInfo} = userRegister

    useEffect(() => {
        setIsDisabled(Object.keys(formErrors).length > 0)
           if(userInfo){
            navigate(redirect)
           }

    },[formErrors])


  return (
    <>
    <Header/>
    <GlobalStyle/>
    <StyledWrapper>
        <StyledForm onSubmit={submitHandler}>
        {message && <StyledError>{message}</StyledError>}
        {error && <StyledError>{error}</StyledError>}
        <StyledTitle>Register</StyledTitle>
        <StyledLabel>Username</StyledLabel>
        <StyledInput
        type='name'
        id='name'
        placeholder='eg. fredrik1998'
        value={name}
        onChange={(e) => setName(e.target.value)}
        >
        </StyledInput>
        <StyledError>{formErrors.name}</StyledError>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
        type='email'
        id='email'
        placeholder='eg. Rookie11421@gmail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></StyledInput>
        <StyledError>{formErrors.email}</StyledError>
        <StyledLabel>Password</StyledLabel>
        <StyledInput
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        >
        </StyledInput>
        <StyledError>{formErrors.password}</StyledError>
        <StyledLabel>Confirm Password</StyledLabel>
        <StyledInput
        type='password'
        id='confirmpassword'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        ></StyledInput>
        <StyledError>{formErrors.confirmPassword}</StyledError>
        <StyledButton>Register</StyledButton>
       <StyledLink to={redirect ? `/login?redirect=${redirect}` : '/login'}> Already have an account? Sign in</StyledLink>
        </StyledForm>
    </StyledWrapper>
    </>
  )
}

export default RegisterScreen