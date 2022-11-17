import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>SET</Text>
    </View>
  )
}