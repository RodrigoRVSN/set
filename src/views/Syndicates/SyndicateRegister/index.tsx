import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from "react-native";
import * as Animatable from 'react-native-animatable'
import { commonStyles } from "../../../Styles/commonStyles";
import { styles } from "./styles";
import { syndicates } from "../consumer";
import { Controller, useForm } from "react-hook-form";

export type syndicateRegisterType = {
  name: string,
}

export default function SyndicateRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<syndicateRegisterType>()

  const [update, setUpdate] = useState<boolean>()
  const navigation = useNavigation<any>()

  const redirectToList = () => {
    navigation.navigate('Síndicos')
  }

  async function handleCreate(data: syndicateRegisterType) {
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

      <TouchableOpacity style={styles.button} disabled={!isValid && !isDirty} onPress={handleSubmit(handleCreate)}>
        <Text style={styles.buttonText} >
          Registrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}