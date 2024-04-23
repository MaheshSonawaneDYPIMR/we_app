import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/redux-store/store/store";
import AppNavigation from "./src/navigation/AppNavigation";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
