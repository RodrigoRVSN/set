import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { commonStyles } from "../../Styles/commonStyles";
import { styles } from "./styles";
import { syndicates } from "./consumer";
import ISyndicate from "./types";


export default function Syndicates() {
  const [update, setUpdate] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>()
  const [allSyndicates, setAllSyndicates] = useState<ISyndicate[]>([])
  const navigation = useNavigation<any>()

  useEffect(() => {
    async function getSyndicates() {
      setLoading(true)
      try {
        const response = await syndicates.get()
        if (response) setAllSyndicates(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getSyndicates()
    navigation.addListener('focus', () => setUpdate(!update))

  }, [update, navigation])

  return (
    <View style={{ backgroundColor: commonStyles.primaryColor }}>

      <Animatable.View
        delay={600}
        animation='fadeInUp'
        style={{ ...styles.mainContainer, justifyContent: loading || !allSyndicates.length ? 'center' : 'flex-start' }}
      >

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Registrar Síndico')}
        >
          <Feather name='plus' size={25} color={commonStyles.primaryColor} />
          <Text
            style={styles.registerButtonText}
          >
            Síndico
          </Text>
        </TouchableOpacity>

        {loading
          ? <ActivityIndicator size={"large"} color={commonStyles.primaryColor} />
          : Array.isArray(allSyndicates) && allSyndicates.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={allSyndicates}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <View>
                        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Nome: </Text> {item.name}</Text>
                        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Email: </Text> {item.email}</Text>
                      </View>
                      <View>
                        <Feather name='user' size={70} color={commonStyles.primaryColor} />
                      </View>
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
