import "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider,useDispatch } from 'react-redux';
import configureStore from "./src/redux-store/store/store";
import { loginSuccess,refreshTokenRequest } from "./src/redux-store/actions/user.actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from "./src/navigation/AppNavigation";


const store = configureStore();
const Stack = createStackNavigator();




const App = () => {

  return (
    <Provider store={store}>
       <AppNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});