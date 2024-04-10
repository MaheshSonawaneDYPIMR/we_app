import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loginSuccess,
  refreshTokenRequest,
} from "../../redux-store/actions/user.actions";
import logo from "../../../assets/images/Icon.png";
import { LoadingSpinner } from "../../components/LoadingSpinner";

const Logo = () => {



  const dispatch = useDispatch();
  const [initialRoute, setInitialRoute] = useState(null); // Initialize to null
  const navigation = useNavigation();

  useEffect(() => {
    
    const getInitialRoute = async () => {
      //const token = await AsyncStorage.getItem("accessToken");
      const token = false;
      console.log("Access token", token);
      setInitialRoute(token ? "MainStackNav" : "OnBoardingStackNav");
    };

    getInitialRoute();
  }, []); // Empty dependency array to run only once after mount

  useEffect(() => {
    let timer;
    if (initialRoute !== null) {
      timer = setTimeout(() => {
        navigation.replace(initialRoute);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [initialRoute, navigation]);
   // Dependency on initialRoute and navigation
console.log("initialRoute", initialRoute);
  if (initialRoute === null) {
    // Return loading component or null while determining initial route
    return <LoadingSpinner />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={logo}
        style={{ width: moderateScale(80), height: moderateScale(80) }}
      />
    </View>
  );
};

export default Logo;
