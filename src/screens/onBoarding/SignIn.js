import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button.js";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { loginRequest,loginFailure } from "../../redux-store/actions/user.actions.js";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../../utils/validations.utils.js";

const SignIn = () => {
  const navigation = useNavigation();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
const dispatch = useDispatch();
  useEffect(() => {
    // Toggle cursor visibility every 500 milliseconds
    const interval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleGooglePressed = () => {
    console.log("handleGooglePressed");
  };

  const handleMetaPressed = () => {
    console.log("handleMetaPressed");
  };

  const handleSignIn = (email, password) => {
    try {
      
      const passwordError = validatePassword(password);
      const emailError = validateEmail(email);

      
      setPasswordError(passwordError);
      setEmailError(emailError);
      console.log(passwordError , emailError);
      if ( !passwordError && !emailError) {
        console.log("email:", email, "password:", password);
        dispatch(loginRequest(email, password))
      }
;
    } catch (error) {
      console.log("handleSignIn error: " + error);
      dispatch(loginFailure(error));
    }
  };

  return (
    <View style={{flex:1,backgroundColor:'#ffffff'}}>
      <View style={{ margin: moderateScale(20), marginTop: moderateScale(70) }}>
        <KeyboardAvoidingView>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "500" }}>Hi there!</Text>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#A4A4A4" }}>
              Welcome back, Sign in to your account
            </Text>
          </View>
          <View style={{ marginTop: moderateScale(40) }}>
            <View>
            <View
              style={[
                {
                  height: moderateScale(55),
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F9FAFB",
                  borderRadius: 14,
                  
                  marginTop: moderateScale(10),
                },
                isEmailFocused && {
                  borderWidth: 0.8,
                  borderColor: "lightgray",
                },
                emailError && {
                  borderWidth: 0.8,
                  borderColor: "red",
                  marginTop:moderateScale(1)

                },
              ]}
            >
              <View
                style={{
                  marginLeft: moderateScale(10),
                  marginRight: moderateScale(10),
                }}
              >
                <Fontisto name="email" size={22} color="#a4a4a4" />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <TextInput
                  value={email}
                  onChangeText={(newEmail) => setEmail(newEmail)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  style={{
                    flex: 1,
                    position: "relative",
                    fontSize: 16,
                    zIndex: 0,
                    height: "100%",
                  }}
                  caretHidden={!isCursorVisible}
                  caretColor="lightgray"
                />
                {email == "" && (
                  <Text
                    style={{
                      position: "absolute",
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#a4a4a4",
                    }}
                  >
                    Email
                  </Text>
                )}
              </View>
            </View>
            {emailError ? (
                <Text style={{ color: "red", marginLeft:moderateScale(9),fontSize:12}}>{emailError}</Text>
              ) : null}
            </View>
           <View>
           <View
              style={[
                {
                  height: moderateScale(55),
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F9FAFB",
                  borderRadius: 14,
                  
                  marginTop: moderateScale(10),
                },
                isPasswordFocused && {
                  borderWidth: 0.8,
                  borderColor: "lightgray",
                },
                passwordError && {
                  borderWidth: 0.8,
                  marginTop:moderateScale(1),
                  borderColor: "red",
                },
              ]}
            >
              <View
                style={{
                  marginLeft: moderateScale(10),
                  marginRight: moderateScale(10),
                }}
              >
                <AntDesign name="lock" size={22} color="#a4a4a4" />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <TextInput
                  value={password}
                  onChangeText={(newPassword) => setPassword(newPassword)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  secureTextEntry={showPassword}
                  style={{
                    flex: 1,
                    position: "relative",
                    fontSize: 16,
                    zIndex: 0,
                    height: "100%",
                  }}
                  caretHidden={!isCursorVisible}
                />
                {password == "" && (
                  <Text
                    style={{
                      position: "absolute",
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#a4a4a4",
                    }}
                  >
                    Password
                  </Text>
                )}
              </View>

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={{
                  marginLeft: moderateScale(10),
                  marginRight: moderateScale(10),
                }}
              >
                <Feather
                  name={showPassword ? "eye-off" : "eye"}
                  size={22}
                  color="#a4a4a4"
                />
              </Pressable>
            </View>
            {passwordError ? (
                <Text style={{ color: "red", marginLeft:moderateScale(9),fontSize:12}}>{passwordError}</Text>
              ) : null}
           </View>
          </View>
          <View style={{marginTop:moderateScale(10)}}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Forgot Password?
            </Text>
          </View>
          <View style={{ marginTop: moderateScale(50) }}>
            <Button
              label={"Sign in"}
              onPress={() => handleSignIn(email, password)}
            />
          </View>
        </KeyboardAvoidingView>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: moderateScale(40),
              }}
            >
              <View
                style={{
                  borderWidth: 0.3,
                  height: moderateScale(0.2),
                  flex: 1,
                  borderColor: "#c2c2c2",
                }}
              />
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#c2c2c2" }}
              >
                OR
              </Text>
              <View
                style={{
                  borderWidth: 0.3,
                  height: moderateScale(0.2),
                  flex: 1,
                  borderColor: "#c2c2c2",
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={handleGooglePressed}
                style={{
                  height: moderateScale(55),
                  flex: 1,
                  marginRight: moderateScale(20),
                  borderWidth: 0.8,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                  borderColor: "#c2c2c2",
                }}
              >
                <AntDesign name="google" size={34} color="black" />
              </Pressable>
              <Pressable
                onPress={handleMetaPressed}
                style={{
                  height: moderateScale(55),
                  flex: 1,

                  borderWidth: 0.8,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                  borderColor: "#c2c2c2",
                }}
              >
                <FontAwesome6 name="meta" size={34} color="black" />
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("SignUp")}
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: moderateScale(40),
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#a4a4a4" }}>
              Don’t have an account?
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#000000" }}>
              Sign out
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
