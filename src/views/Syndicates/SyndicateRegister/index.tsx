import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from "react-native";
import * as Animatable from 'react-native-animatable'
import { commonStyles } from "../../../Styles/commonStyles";
import { styles } from "./styles";
import { syndicates } from "../consumer";
import { Controller, useForm } from "react-hook-form";
import ISyndicate from "../types";


export default function SyndicateRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ISyndicate>()

  const navigation = useNavigation<any>()

  const redirectToList = () => {
    navigation.navigate('Síndicos')
  }

  async function handleCreate(data: ISyndicate) {
    if (!data) return
    try {
      const response = await syndicates.create(data)
      if (response) {
        console.log('Síndico cadastrado com sucesso!')
        redirectToList()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Nome</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='name'
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='Digite o nome do síndico'
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
            placeholder='Digite o email do síndico'
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
            placeholder='Digite a senha'
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
                    keyboardType='numeric'
                    placeholder='Digite o telefone'
                    style={styles.input}
                    value={value}
                    onChangeText={onChange}
                />
            )}
        />
        {errors?.phone && (
            <Text style={styles.errorText}>Numero obrigatória!</Text>
        )}

      <TouchableOpacity style={styles.button} disabled={!isValid && !isDirty} onPress={handleSubmit(handleCreate)}>
        <Text style={styles.buttonText} >
          Registrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}