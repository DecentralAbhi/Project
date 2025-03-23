import React, { useState } from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "@/context/AuthContext";
import Register from "@/screens/Register";
import Home from "@/screens/Home";
import LoginIn from "@/screens/LoginIn";

export default function HomeScreen () {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationIndependentTree>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginIn" component={LoginIn} />
            <Stack.Screen name="Register" component={Register} />


            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
     </NavigationIndependentTree>
  );
};


