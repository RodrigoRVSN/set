import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../views/Dashboard";

const AppStack = createNativeStackNavigator()

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name='Dashboard' component={Dashboard}/>
  </AppStack.Navigator>
)

export default AppRoutes
