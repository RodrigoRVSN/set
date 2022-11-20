import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../views/Dashboard";
import Menu from "../views/Menu";
import { About } from "../views/About";

const AppStack = createNativeStackNavigator()

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name='Menu' options={{ headerShown: false }} component={Menu} />
    <AppStack.Screen name='Dashboard' component={Dashboard} />
    <AppStack.Screen name='Condomínios' component={Menu} />
    <AppStack.Screen name='Síndicos' component={Menu} />
    <AppStack.Screen name='Sobre' component={About} />
  </AppStack.Navigator>
)

export default AppRoutes
