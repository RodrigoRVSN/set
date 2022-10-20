import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { styles } from './styles'

interface IFields {
  name: string
  placeholder: string
}

interface IFormComponent {
  fields: IFields[]
  type: string
}

interface FormData {
  [key: string]: unknown
}

export default function FormComponent({ fields, type }: IFormComponent) {
  const { control, handleSubmit } = useForm()
  const [loadedFields, setLoadedFields] = useState()

  const onSubmit = (data: FormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      {fields.map((field: IFields) => (
        <Controller
          defaultValue={loadedFields && loadedFields[field.name]}
          key={field.name}
          control={control}
          name={field.name}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder={field.placeholder}
              autoCapitalize='none'
              style={styles.input}
              value={value as string}
              onChangeText={onChange}
            />
          )}
        />
      ))}
      <Button color='black' title='Enviar' onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
