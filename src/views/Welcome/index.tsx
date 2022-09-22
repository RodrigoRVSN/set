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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>
        <Text style={styles.text}>
          Ut et quam rem vero odit consequatur esse enim sint possimus dolorem,
          provident architecto incidunt, hic fugit repellat laborum laboriosam
          reprehenderit unde!
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
