import React from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { useAuth } from '../../contexts/auth'
import { styles } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { FormLayout } from '../../components/FormLayout'

interface FormData {
  email: string
  password: string
}

export default function SignIn({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const { signIn } = useAuth()

  const handleSignIn = (data: FormData) => {
    const { email, password } = data
    if (email && password) signIn(email, password)
  }

  return (
    <FormLayout message="Bem-vindo(a)">
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
      {errors?.email && (
        <Text style={styles.errorText}>Email obrigatório!</Text>
      )}
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
      {errors?.password && (
        <Text style={styles.errorText}>Senha obrigatória!</Text>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSubmit(handleSignIn)}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.registerButton} onPress={() => navigation.navigate('SignUp')}>
          Não possui uma conta?
        </Text>
      </TouchableOpacity>
    </FormLayout>
  )
}
