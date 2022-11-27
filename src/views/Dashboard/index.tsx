import React from "react";
import { View, Text } from "react-native";
import * as Animatable from 'react-native-animatable'
import { commonStyles } from "../../Styles/commonStyles";
import { styles } from "./styles";

export default function Dashboard() {
  return (
    <View style={{backgroundColor: commonStyles.primaryColor}}>
    <Animatable.View style={styles.mainContainer} delay={600} animation='fadeInUp'>
      <Text>Dashboard</Text>
    </Animatable.View>
    </View>
  )
}