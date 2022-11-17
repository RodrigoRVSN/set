import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import { menuOptions } from "./constants";
import { styles } from "./styles";

export default function Menu() {
  return (
    <View style={styles.mainContainer}>
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
    </View>
  )
}