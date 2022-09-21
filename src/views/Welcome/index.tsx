/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>
        <Text style={styles.text}>
          Ut et quam rem vero odit consequatur esse enim sint possimus dolorem,
          provident architecto incidunt, hic fugit repellat laborum laboriosam
          reprehenderit unde!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
