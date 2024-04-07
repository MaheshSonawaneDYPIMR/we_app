import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignUp from '../screens/mainScreens/SignUp';
import SignIn from '../screens/mainScreens/SignIn';

const Stack = createStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStackNav;
