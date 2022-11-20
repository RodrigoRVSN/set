import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text } from "react-native";
import * as Animatable from 'react-native-animatable'
import { styles } from "./styles";

export function About() {
  return (
    <Animatable.View style={styles.mainContainer} delay={600} animation='fadeInUp'
    >
      <Text style={styles.title}>Sobre o aplicativo:</Text>
      <Text style={styles.text}>
        Aplicativo SET foi um trabalho desenvolvido para a disciplina de Usina de Projetos (UPX) para o problema de diferentes
        fornecedores de placas solares da construtora Planeta.
      </Text>

      <Text style={styles.title}>Alunos:</Text>
      <Text style={styles.text}>Antônio Neto</Text>
      <Text style={styles.text}>Gabriel Bueno</Text>
      <Text style={styles.text}>Gabriel Messias</Text>
      <Text style={styles.text}>Gianluca Bueno</Text>
      <Text style={styles.text}>Leonardo Mayoral</Text>
      <Text style={styles.text}>Natanael Vitorino</Text>
      <Text style={styles.text}>Rodrigo Victor</Text>

      <Text style={styles.title}>Orientadores:</Text>
      <Text style={styles.text}>Renato Moraes</Text>
      <Text style={styles.text}>Germano de Freitas</Text>
    </Animatable.View>
  )
}