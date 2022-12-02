/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles } from './styles'

export default function Welcome() {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../assets/images/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <Animatable.View
        delay={600}
        animation='fadeInUp'
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Bem-Vindo(a) ao SET - Solar Energy Tracking
        </Text>
        <Text style={styles.text}>
          Aqui você poderá cadastrar e visualizar informações sobre condomínios e síndicos, assim como as estatísticas de geração de energia solar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
