import React from "react";
import { View, Text, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import { menuOptions } from "./constants";
import { styles } from "./styles";

export default function Menu() {
  return (
    <Animatable.View
      style={styles.mainContainer}
      delay={600}
      animation='fadeInDown'
    >
      <Header />
      <View style={styles.cardsContainer}>
        <FlatList
          style={{ alignSelf: 'center' }}
          scrollEnabled={false}
          key={2}
          numColumns={2}
          data={menuOptions}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </Animatable.View>
  )
}