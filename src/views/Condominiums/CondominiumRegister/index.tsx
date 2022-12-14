import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from "react-native";
import { selectButton, styles } from "./styles";
import { condominiums } from "../consumer";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-native-select-dropdown'
import { syndicates } from "../../Syndicates/consumer";
import { ISyndicates } from "../../Syndicates";
import ICondominium from "../types";

export default function CondominiumRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ICondominium>()

  const [allSyndicates, setAllSyndicates] = useState<ISyndicates[]>()
  const [update, setUpdate] = useState<boolean>()
  const navigation = useNavigation<any>()

  const redirectToList = () => {
    navigation.navigate('Condomínios')
  }

  async function handleCreate(data: ICondominium) {
    if (!data) return
    try {
      const response = await condominiums.create(data)
      if (response) {
        console.log('Condomínio cadastrado com sucesso!')
        redirectToList()
      }
    } catch (error) {
      console.log('erro: ',error.message)
    }
  }

  useEffect(() => {
    async function getSyndicates() {
      try {
        const response = await syndicates.get()
        if (response) setAllSyndicates(response)
      } catch (error) {
        console.log(error)
      }
    }
    getSyndicates()
    navigation.addListener('focus', () => setUpdate(!update))

  }, [update, navigation])

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Nome</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='name'
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='Digite o nome do condomínio'
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors?.name && (
        <Text style={styles.errorText}>Nome obrigatório!</Text>
      )}
      <Text style={styles.title}>Endereço</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='address'
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='Digite o endereço'
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors?.name && (
        <Text style={styles.errorText}>Endereço obrigatório!</Text>
      )}

      <Text style={styles.title}>Síndico Responsável</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name='syndicateId'
        render={({ field: { onChange } }) => (
          <Select
            defaultButtonText='Selecionar Síndico'
            data={allSyndicates}
            buttonStyle={{ ...selectButton }}
            onSelect={({ id }) => onChange(id)}
            buttonTextAfterSelection={selectedItem => selectedItem.name}
            rowTextForSelection={item => item.name}
          />
        )}
      />
      {errors?.syndicateId && (
        <Text style={styles.errorText}>Síndico obrigatório!</Text>
      )}

      <TouchableOpacity style={styles.button} disabled={!isValid && !isDirty} onPress={handleSubmit(handleCreate)}>
        <Text style={styles.buttonText} >
          Registrar
        </Text>
      </TouchableOpacity>

    </View>
  )
}