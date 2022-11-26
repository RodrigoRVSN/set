import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable'
import { commonStyles } from "../../../Styles/commonStyles";
import { styles } from "./styles";
import { condominiums } from "../consumer";

export default function CondominiumRegister () {
  return (
    <View style={styles.mainContainer}>
      <Text>
        Registrar Condomínio
      </Text>
    </View>
  )
}