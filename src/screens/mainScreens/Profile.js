import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect } from "react";

const ProfileScreen = () => {
  const [showComments, setShowComments] = useState(false)
  const [profileData, setProfileData] = useState({
    user: {
      username: "username",
      profileImage:
        "https://imgs.search.brave.com/71FF290rO4Q1e3HEToj-Y3dAf1No-jCqwwGrngcbQJA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzA1/L2NlLzRiMDVjZTdm/NjUzOGFhMDYxNGUx/NzFlNzBmMGRmZmI5/LmpwZw",
      posts: 10,
      followers: 10,
      following: 10,
      disease: "Unknown Disease",
      bio: "Passionate explorer, always curious. Lover of books, music, and endless adventures.",
    },
  });
  const handleShareProfile = () => {
    console.log("Share Profile Pressed");
    // Implement your share profile logic here
  };

  const handleEditProfile = () => {
    console.log("Edit Profile Pressed");
    // Implement your edit profile logic here
  };

  useEffect(() => {
    const fun_SetProfileData = async () => {
      try {
        const data = await AsyncStorage.getItem("user");
        if (data) {
          setProfileData(JSON.parse(data));
        } else {
          console.log("User data not found in AsyncStorage");
        }
      } catch (error) {
        console.log("Error fetching data from AsyncStorage:", error);
        // Handle the error appropriately (e.g., show a message to the user)
      }
    };
    fun_SetProfileData();
  }, []);

  console.log(showComments)

  console.log("profile data", profileData);

  return (
    <View style={{ flex: 1, backgroundColor: "#ecf3f9" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: moderateScale(10),
          height: moderateScale(50),
          // backgroundColor:'pink',
          marginTop: moderateScale(27.25),

          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          {profileData.user.username ? profileData.user.username : "username"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: moderateScale(10),
          }}
        >
          <Pressable>
            <MaterialIcons name="menu" size={28} color="black" />
          </Pressable>
          <Pressable>
            <FontAwesome5 name="bell" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      {/* Profile and stats */}
      <View
        style={{
          marginHorizontal: moderateScale(10),
          marginBottom: moderateScale(3),
          marginTop: moderateScale(7),
          flexDirection: "row",
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: profileData.user.profileImage
                  ? profileData.user.profileImage
                  : "https://imgs.search.brave.com/71FF290rO4Q1e3HEToj-Y3dAf1No-jCqwwGrngcbQJA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiLzA1/L2NlLzRiMDVjZTdm/NjUzOGFhMDYxNGUx/NzFlNzBmMGRmZmI5/LmpwZw",
              }}
              style={{
                width: moderateScale(76),
                height: moderateScale(76),
                borderRadius: moderateScale(38),
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}
            >
              {profileData.user.username
                ? profileData.user.username
                : "username"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 16,
            flex: 1,
            alignSelf: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {profileData.user.posts ? profileData.user.posts : 10}
            </Text>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "700" }}>
              Posts
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {profileData.user.followers ? profileData.user.followers : 10}
            </Text>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "700" }}>
              Followers
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {profileData.user.following ? profileData.user.following : 10}
            </Text>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "700" }}>
              Following
            </Text>
          </View>
        </View>
      </View>
      {/*bio and username */}
      <View>
        <View
          style={{
            marginHorizontal: moderateScale(10),
            width: "75%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {profileData.user.disease
              ? profileData.user.disease
              : "Unknown Deasease"}
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "400" }}>
            {profileData.user.bio
              ? profileData.user.bio
              : "Passionate lexplorer, always curious. Lover of books, music, and endless adventures.\n.\n.\n nothing more"}
          </Text>
        </View>
      </View>

      {/* Posts */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: moderateScale(20),
        }}
      >
        <Pressable
          onPress={()=>setShowComments(false)}
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",

            flex: 1,
          }}
        >
          <MaterialIcons name="grid-on" size={24} color={showComments?"gray":"black"} />
          <View
            style={{
              width: "80%",
              borderColor: showComments?"gray":"black",
              borderWidth: showComments?0.3:0.8,
              marginTop: moderateScale(2),
            }}
          />
        </Pressable>
        <Pressable
           onPress={()=>setShowComments(true)}
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <FontAwesome5 name="comment" size={24} color={showComments?"black":"gray"} />
          <View
            style={{
              borderColor: showComments?"black":"gray",
              borderWidth: showComments?0.8:0.3,
              marginTop: moderateScale(2),
              width: '80%'
           
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
