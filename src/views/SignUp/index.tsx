import React from 'react'
import { FormLayout } from '../../components/FormLayout'
import {  signUp } from '../../services/Auth/auth'
import { SignUpType } from '../../services/Auth/auth.types'
import { SignUpForm } from './SignUpForm'

export default function SignUp({ navigation }) {
  const handleRedirectToLogin = () => {
    navigation.navigate('SignIn')
  }

  const handleSignUp = async (data: SignUpType) => {
    try {
      await signUp(data)
      handleRedirectToLogin()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormLayout message="Crie sua conta!">
      <SignUpForm 
        goToLogin={handleRedirectToLogin} 
        handleSignUp={handleSignUp}
      /> 
    </FormLayout>
  )
}
