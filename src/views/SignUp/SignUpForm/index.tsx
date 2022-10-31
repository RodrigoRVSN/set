import React from "react"
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { selectButton, styles } from './styles'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-native-select-dropdown'
import { SignUpType } from "../../../services/Auth/auth.types"
import { roles } from "../SignUp.data"

interface SignUpFormProps {
  goToLogin: () => void
  handleSignUp: (data: SignUpType) => void
}

export const SignUpForm = ({ goToLogin, handleSignUp }: SignUpFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SignUpType>()

  return (
    <>
      <Text style={styles.title}>Nome</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='name'
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='Digite seu nome'
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors?.name && (
        <Text style={styles.errorText}>Nome obrigatório!</Text>
      )}

      <Text style={styles.title}>Email</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='email'
        render={({ field: { value, onChange } }) => (
          <TextInput
            keyboardType='email-address'
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


      <Text style={styles.title}>Telefone</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='phone'
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='(15) 9970707070'
            keyboardType='numeric'
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors?.phone && (
        <Text style={styles.errorText}>Telefone obrigatório!</Text>
      )}

      <Text style={styles.title}>Cargo</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='role'
        render={({ field: { onChange } }) => (
          <Select
            defaultButtonText='Escolher um cargo'
            data={roles}
            buttonStyle={{ ...selectButton }}
            onSelect={({ name }) => onChange(name)}
            buttonTextAfterSelection={selectedItem => selectedItem.label}
            rowTextForSelection={item => item.label}
          />
        )}
      />
      {errors?.role && (
        <Text style={styles.errorText}>Cargo obrigatório!</Text>
      )}

      <TouchableOpacity style={styles.button} disabled={!isValid && !isDirty} onPress={handleSubmit(handleSignUp)}>
        <Text style={styles.buttonText} >
          Registrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.registerButton}>
          Ja possui uma conta?
        </Text>
      </TouchableOpacity>
    </>
  )
}