import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Quiz from '../screens/onBoarding/Quiz';
import MyTabs from './BottomNav';
const Stack = createStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
       <Stack.Screen name='Home' component={MyTabs} options={{ headerShown:false }} />
    </Stack.Navigator>
  );
};

export default MainStackNav;
