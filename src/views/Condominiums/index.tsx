import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { commonStyles } from "../../Styles/commonStyles";
import { styles } from "./styles";
import { condominiums } from "./consumer";

interface ICondominium {
  name: string
}

export default function Condominiums() {
  const [update, setUpdate] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>()
  const [allCondominiums, setAllCondominiums] = useState<ICondominium[]>()
  const navigation = useNavigation<any>()

  useEffect(() => {
    async function getCondominiums() {
      setLoading(true)
      try {
        const response = await condominiums.get()
        if (response) setAllCondominiums(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCondominiums()
    navigation.addListener('focus', () => setUpdate(!update))

  }, [update, navigation])

  return (
    <View style={{ backgroundColor: commonStyles.primaryColor }}>


      <Animatable.View
        delay={600}
        animation='fadeInUp'
        style={{ ...styles.mainContainer, justifyContent: loading || !allCondominiums ? 'center' : 'flex-start' }}
      >
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Registrar Condomínio')}
        >
          <Feather name='plus' size={25} color={commonStyles.primaryColor} />
          <Text
            style={styles.registerButtonText}
          >
            Condomínio
          </Text>
        </TouchableOpacity>

        {loading
          ? <ActivityIndicator size={"large"} color={commonStyles.primaryColor} />
          : Array.isArray(allCondominiums) && allCondominiums.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={allCondominiums}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <Text style={styles.text}>Nome: {item.name}</Text>
                    </View>
                  )}
                />
              </View>
            </>
            : <Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>Não há dados!</Text>
        }
      </Animatable.View>
    </View>
  )
}
