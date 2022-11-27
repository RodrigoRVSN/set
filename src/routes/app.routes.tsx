import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../views/Dashboard";
import Menu from "../views/Menu";
import { About } from "../views/About";
import Condominiums from "../views/Condominiums";
import Syndicates from "../views/Syndicates";
import CondominiumRegister from "../views/Condominiums/CondominiumRegister";
import SyndicateRegister from "../views/Syndicates/SyndicateRegister";

const AppStack = createNativeStackNavigator()

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name='Menu' options={{ headerShown: false }} component={Menu} />
    <AppStack.Screen name='Dashboard' component={Dashboard} />
    <AppStack.Screen name='Condomínios' component={Condominiums} />
    <AppStack.Screen name='Registrar Condomínio' component={CondominiumRegister} />
    <AppStack.Screen name='Registrar Síndico' component={SyndicateRegister} />
    <AppStack.Screen name='Síndicos' component={Syndicates} />
    <AppStack.Screen name='Sobre' component={About} />
  </AppStack.Navigator>
)

export default AppRoutes
