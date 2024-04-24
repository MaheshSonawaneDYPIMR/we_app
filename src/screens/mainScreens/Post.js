import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  Keyboard,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  postUpdateFailure,
  postUpdateRequest,
  changePostUpdatedState
} from "../../redux-store/actions/user.actions";
import { LoadingSpinner } from "../../components/LoadingSpinner";
const options = {
  title: "Select Image",
  type: "library",
  options: {
    mediaType: "photo",
    quality: 0.5,
    maxWidth: 500,
    maxHeight: 500,
    selectionLimit: 1,
    includeBase64: false,
  },
};

export default function App() {
  const navigation = useNavigation();
  // Stores the selected image URI
  const [postPic, setPostPic] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [postMsg, setPostMsg] = useState("");
  // Stores any error message
  const [resultForFormdata, setResultForFormData] = useState();
  const dispatch = useDispatch();
  const formData = new FormData();
  const {error , isLoading ,isPostUpdated} = useSelector((state)=>state.user)
  console.log('error: ', error ,'isPostUpdated:',isPostUpdated, 'isLoading: ', isLoading)

  const handlePostUpdate = async () => {
    try {
      formData.append("postPic", {
        uri: resultForFormdata.assets[0].uri,
        type: resultForFormdata.assets[0].mimeType,
        name: resultForFormdata.assets[0].fileName,
        size: resultForFormdata.assets[0].fileSize,
      });
      formData.append("postMsg", postMsg);

      dispatch(postUpdateRequest(formData));

      setPostMsg("");
      setPostPic("");
    } catch (error) {
      // Handle error appropriately, e.g., dispatch an action to update Redux store with error
      dispatch(postUpdateFailure("Error posting update"));
      console.log("Error while posting update", error);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera 
				roll permission to upload images.`
      );
    } else {
      // Launch the image library and get
      // the selected image
      const result = await ImagePicker.launchImageLibraryAsync(options);

      if (!result.canceled) {
        // If an image is selected (not cancelled),
        // update the postPic state variable
        setResultForFormData(result);
        console.log("resultForFormdata", resultForFormdata);
        setPostPic(result.assets[0].uri);

    
      }
    }
  };

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      () => setIsKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      () => setIsKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

   if (isLoading) {
    return <LoadingSpinner text={"Posting Update..."}/>;
  }

  if(isPostUpdated){
    dispatch(changePostUpdatedState())
    navigation.navigate("Feed");
  }

  return (
    <View style={{ backgroundColor: "#ecf3f9", flex: 1 }}>
      <View style={{ flex: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            //padding: moderateScale(10),
            height: moderateScale(50),
            backgroundColor: "white",
            marginTop: moderateScale(27.25),
            elevation: 3,

            alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 1,
              marginLeft: moderateScale(20),
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Add Update
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name="arrow-with-circle-right" size={30} color="black" />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: moderateScale(10),
            }}
          ></View>
        </View>
        <View style={{ marginHorizontal: moderateScale(20) }}>
          <View>
            <View
              style={{
                height: moderateScale(280),
                width: "100%",
                borderWidth: 0.8,
                marginTop: moderateScale(10),
                borderTopStartRadius: 12,
                borderTopEndRadius: 12,
                backgroundColor: "#f9f9f9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!postPic ? (
                <Pressable onPress={pickImage} style={{ alignItems: "center" }}>
                  <EvilIcons name="plus" size={150} color="#0D98BA" />
                  <Text style={{ color: "gray", fontWeight: "400" }}>
                    {"(click add image)"}
                  </Text>
                </Pressable>
              ) : (
                <View
                  style={{ width: "50%", height: "70%", overflow: "hidden" }}
                >
                  <Pressable
                    onPress={() => {
                      setPostPic(null);
                    }}
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      right: 8,
                      top: 8,
                      backgroundColor: "#ffffff",
                      borderRadius: 14,
                      opacity: 0.8,
                    }}
                  >
                    <Entypo name="cross" size={28} color="black" />
                  </Pressable>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 12,
                      position: "relative",
                    }}
                    source={{ uri: postPic }}
                  />
                </View>
              )}
            </View>
            <View style={{ width: "100%", marginTop: moderateScale(3) }}>
              <TextInput
                onFocus={() => setShowPlaceholder(false)}
                onChangeText={(value) => setPostMsg(value)}
                // multiline={true}
                value={postMsg}
                style={{
                  height: moderateScale(100),
                  width: "100%",
                  borderWidth: 0.8,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  backgroundColor: "#f9f9f9",
                  justifyContent: "flex-start",
                  textAlignVertical: "top",
                  padding: moderateScale(10),
                  position: "relative",
                }}
              />
              <View
                style={{ zIndex: 1, position: "absolute", top: 10, left: 12 }}
              >
                {showPlaceholder || postMsg === "" ? (
                  <Text style={{ color: "gray", fontSize: 16 }}>
                    Write your Health update here...
                  </Text>
                ) : (
                  <View></View>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
      {!isKeyboardVisible ? (
        <View
          style={{
            alignSelf: "center",
            width: "80%",
            margin: moderateScale(20),
          }}
        >
          <Button
            label={"Post Update"}
            style={{
              left: "center",
              right: "center",
              bottom: moderateScale(0),
            }}
            onPress={() => handlePostUpdate(postMsg, postPic)}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
