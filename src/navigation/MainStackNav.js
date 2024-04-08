import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/mainScreens/Home';
const Stack = createStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStackNav;
