import React from "react";
import { View, Dimensions, Image, Text, Pressable } from "react-native";

import Chair from "../../../assets/images/S2Chair.png";
import {
  moderateScale,
  moderateScaleVertical,
} from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () => {
const navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#6CB4EE",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: moderateScale(90),
          left: moderateScale(25),
          
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: "600",
          }}
        >
          Discover Your {"\n"}
          Community
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#F9FAFB",
            marginTop:moderateScale(10),
           
            alignSelf:'center',
            marginRight:moderateScale(30)
          }}
        >
          Explore diverse groups and discussions on WeApp to find people who resonate with your health experiences and journeys.
        </Text>
        <View style={{ flexDirection: "row" ,marginTop:moderateScale(15)}}>
          <View
            style={{
              height: moderateScale(12),
              width: moderateScale(12),
              
              backgroundColor: "#F9FAFB",
              borderRadius: moderateScale(6),
            }}
          />
          <View
            style={{
              height: moderateScale(12),
              width: moderateScale(12),
              backgroundColor: "yellow",
              borderRadius: moderateScale(6),
              marginHorizontal: moderateScale(8),
            }}
          />

          <View
            style={{
              height: moderateScale(12),
              width: moderateScale(12),
              backgroundColor: "#F9FAFB",
              borderRadius: moderateScale(6),
            }}
          />
        </View>
      </View>

      <Image
        source={Chair}
        style={{
          width: moderateScale(350),
          height: moderateScale(350),
          alignSelf: "center",
          position: "absolute",
          bottom: moderateScale(120),
        }}
      />
      <LinearGradient
        colors={["transparent", "black"]}
        style={{
          height: "70%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <Pressable
         onPress={() => {
          navigation.replace('Screen3');
         }}
        style={{
          position: "absolute",
          bottom: moderateScale(60),
          height: moderateScale(60),
          width: moderateScale(60),
          borderRadius: moderateScale(30),
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",

          left: "center",
          right: "center",
          backgroundColor: "yellow",
        }}
      >
        <AntDesign name="arrowright" size={34} color="#323232" />
      </Pressable>
    </View>
  );
};

export default Screen1;
