import "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStackNav from "./src/navigation/MainStackNav";
import OnBoardingStackNav from "./src/navigation/OnBoardingStackNav";
import { Provider } from "react-redux";
import configureStore from "./src/redux-store/store/store";

const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoardingStackNav">
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
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
