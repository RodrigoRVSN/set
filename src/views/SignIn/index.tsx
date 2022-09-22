import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import AuthContext from '../../contexts/auth'
import { styles } from './styles'

export default function SignIn() {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const { signed, signIn } = useContext(AuthContext)

  function handleSignIn() {
    if (email !== '' && password !== '') signIn(email, password)
  }
  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerHeader} animation='fadeInLeft' delay={500}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp' delay={500}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Digite um email' style={styles.input} onChange={(item) => console.log(item.target)}/>

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite uma senha' style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text 
          style={styles.buttonText}
          onPress={handleSignIn}
          >Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
