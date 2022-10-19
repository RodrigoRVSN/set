import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useAuth } from '../../contexts/auth'
import { styles } from './styles'
import { Controller, useForm } from 'react-hook-form'

type FormData = {
  email: string,
  password: string
}

export default function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { signed, signIn } = useAuth()

  const handleSignIn = (data: FormData) => {
    const { email, password } = data
    if (email && password) signIn(email, password)
  }

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerHeader} animation='fadeInLeft' delay={500}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp' delay={500}>
        <Text style={styles.title}>Email</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          name='email'
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder='Digite seu email'
              autoCapitalize='none'
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors?.email && <Text style={styles.errorText}>Email obrigatório!</Text>}
        <Text style={styles.title}>Senha</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          name='password'
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder='Digite sua senha'
              autoCapitalize='none'
              secureTextEntry
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors?.password && <Text style={styles.errorText}>Senha obrigatória!</Text>}

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={handleSubmit(handleSignIn)}
          >Login
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
