import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { styles } from './styles'

interface IFields {
  name: string
  placeholder: string
}

interface IFormComponent {
  label: string
  type: string
  errorMessage: string
}

interface FormData {
  [key: string]: unknown
}

export default function FormComponent({ label, errorMessage, type }: IFormComponent) {
  const { control, handleSubmit } = useForm()
  const [loadedFields, setLoadedFields] = useState()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <>
      <Text>{label}</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='password'
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='Digite sua senha'
            autoCapitalize='none'
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errorMessage && (
        <Text>{label} obrigatória!</Text>
      )}
    </>
  )
}
