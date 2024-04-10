import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNav from "./MainStackNav";
import OnBoardingStackNav from "./OnBoardingStackNav";
import Logo from "../screens/onBoarding/Logo";

const Stack = createStackNavigator();

const AppNavigation = () => {

  
  return (
    <NavigationContainer>
       
      <Stack.Navigator>
      <Stack.Screen
          name="Logo"
          component={Logo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingStackNav"
          component={OnBoardingStackNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStackNav"
          component={MainStackNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
