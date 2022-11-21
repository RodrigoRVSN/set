import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/auth";
import { menuOptions } from "./constants";
import { styles } from "./styles";

export default function Menu() {
  const navigation = useNavigation<any>()
  const { signOut } = useAuth()

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
              <Text
                style={styles.cardText}
                onPress={() => navigation.navigate(item.route)}
              >
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text
          style={styles.logoutButtonText}
          onPress={() => signOut()}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  )
}