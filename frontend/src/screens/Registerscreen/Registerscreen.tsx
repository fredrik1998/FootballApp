import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledTitle, StyledWrapper, StyledError} from './RegisterElements'
const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled]  = useState(true)

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '', 
    })

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const errors: typeof formErrors = {name: '', email: '', password: '', confirmPassword: ''};
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
        }
    }

    useEffect(() => {
        setIsDisabled(Object.keys(formErrors).length > 0)
    },[formErrors])


  return (
    <>
    <Header/>
    <GlobalStyle/>
    <StyledWrapper>
        <StyledForm onSubmit={submitHandler}>
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
        </StyledForm>
    </StyledWrapper>
    </>
  )
}

export default RegisterScreen