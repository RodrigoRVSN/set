import React from "react";
import { View, Text } from "react-native";
import * as Animatable from 'react-native-animatable'
import { styles } from "./styles";

export default function Condominiums() {
  return (
    <Animatable.View style={styles.mainContainer} delay={600} animation='fadeInUp'>
      <Text>Condomínios</Text>
    </Animatable.View>
  )
}