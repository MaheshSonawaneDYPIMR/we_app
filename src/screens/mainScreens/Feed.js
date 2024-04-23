import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getCurrentUserFailure,getCurrentUserRequest } from '../../redux-store/actions/user.actions'
import { useSelector,useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
const Feed = () => {
  const [userData, setUserData] = useState(null); // Initialize userData with null
  const dispatch = useDispatch();
  const { user, error, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    console.log('Inside useEffect for user change');
    const setUserDataInAsyncStorage = async (user) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(user)); // Stringify user object before storing
        console.log('User data stored in AsyncStorage:', user);
      } catch (error) {
        console.error('Error storing user data:', error);
      }
    };

    if (user) {
      console.log('User data available:', user);
      setUserData(user); // Update local state when user changes
      setUserDataInAsyncStorage(user); // Store user data in AsyncStorage
    }
  }, [user]); // Watch for changes in user state only

  useEffect(() => {
    console.log('Inside useEffect for initial user fetch');
    if (!user && !isLoading && !error) {
      try {
        console.log('Dispatching getCurrentUserRequest');
        dispatch(getCurrentUserRequest()); // Dispatch action to get current user
      } catch (error) {
        console.error('Error dispatching getCurrentUserRequest:', error);
        dispatch(getCurrentUserFailure()); // Dispatch action if there's an error
      }
    }
  }, [user, isLoading, error, dispatch]); // Watch for changes in user, isLoading, and error states

  console.log('Rendering Feed component');

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Text>Home</Text>
    </View>
  );
};


export default Feed

const styles = StyleSheet.create({})