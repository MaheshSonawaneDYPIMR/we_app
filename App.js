import 'react-native-gesture-handler'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStackNav from './src/navigation/MainStackNav';
import OnBoardingStackNav from './src/navigation/OnBoardingStackNav';
const Stack = createStackNavigator();

const SignUp = () => {
  return (
    <NavigationContainer style={styles.container}>
    <Stack.Navigator intialRouteName="onBoardingStackNav">
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
  )
}

export default SignUp

const styles = StyleSheet.create({})