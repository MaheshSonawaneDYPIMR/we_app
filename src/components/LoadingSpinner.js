import React from 'react';
import { View, ActivityIndicator, StyleSheet,Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const LoadingSpinner = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="extra-large" color="#0D98BA" />
      <Text style={{fontSize:16,fontWeight:'500',color:"#0D98BA",marginTop:moderateScale(20)}}>({props.text})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ffffff"
    
  },
});

export {LoadingSpinner};
