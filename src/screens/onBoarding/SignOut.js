import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button.js";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  registerRequest,
  registerFailure,
} from "../../redux-store/actions/auth.actions.js";

import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../../utils/validations.utils.js";
import { LoadingSpinner } from "../../components/LoadingSpinner.js";
import { AlertBox } from "../../components/AlertBox.js";

const SignOut = () => {
  const navigation = useNavigation();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { user, error, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleGooglePressed = () => {
    console.log("handleGooglePressed");
  };

  const handleMetaPressed = () => {
    console.log("handleMetaPressed");
  };

  console.log("user", user, "error", error, "isLoding", isLoading);

  const handleSignOut = (email, username, password) => {
    try {
      const usernameError = validateUsername(username);
      const passwordError = validatePassword(password);
      const emailError = validateEmail(email);

      setUsernameError(usernameError);
      setPasswordError(passwordError);
      setEmailError(emailError);

      if (!usernameError && !passwordError && !emailError) {
        console.log(
          "email:",
          email,
          "password:",
          password,
          "username:",
          username
        );
        dispatch(registerRequest(email, username, password));
      }
    } catch (error) {
      console.log("handleSignOut error: " + error);
      dispatch(registerFailure(error));
    }
  };

  useEffect(() => {
    if (error === "Request failed with status code 500") {
      return AlertBox(
        "Register Failed",
        "Something went wrong while creating user"
      );
    }
    if (error === "Request failed with status code 404") {
      return AlertBox(
        "unexpected error",
        "something went wrong please try again later after some time."
      );
    }
  }, [error]);

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <LoadingSpinner />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ margin: moderateScale(20), marginTop: moderateScale(70),flex:1,justifyContent:'space-between' }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "500" }}>Hi there!</Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#2C3539" }}>
            Welcome back, Sign in to your account
          </Text>
        </View>
        <KeyboardAvoidingView>
          <View style={{ marginTop: moderateScale(30) }}>
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
                  isUsernameFocused && {
                    borderWidth: 0.8,
                    borderColor: "blue",
                  },
                  usernameError && {
                    borderWidth: 0.8,
                    borderColor: "red",
                    marginTop: moderateScale(1),
                  },
                  error === "Request failed with status code 408" && {
                    borderWidth: 0.8,
                    borderColor: "red",
                    marginTop: moderateScale(1),
                  },
                ]}
              >
                <View
                  style={{
                    marginLeft: moderateScale(10),
                    marginRight: moderateScale(10),
                  }}
                >
                  <AntDesign name="user" size={22} color="#a4a4a4" />
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
                    value={username}
                    onChangeText={(newUsername) => {
                      setUsername(newUsername);
                    }}
                    onFocus={() => setIsUsernameFocused(true)}
                    onBlur={() => setIsUsernameFocused(false)}
                    style={{
                      flex: 1,
                      position: "relative",
                      fontSize: 16,
                      zIndex: 0,
                      height: "100%",
                    }}
                    caretHidden={false}
                    keyboardType="email-address"
                    caretColor="lightgray"
                  />
                  {username == "" && (
                    <Text
                      style={{
                        position: "absolute",
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#a4a4a4",
                      }}
                    >
                      Username
                    </Text>
                  )}
                </View>
              </View>
              {usernameError ? (
                <Text
                  style={{
                    color: "red",
                    marginLeft: moderateScale(9),
                    fontSize: 12,
                  }}
                >
                  {usernameError}
                </Text>
              ) : null}
              {error === "Request failed with status code 408" ? (
                <Text
                  style={{
                    color: "red",
                    marginLeft: moderateScale(9),
                    fontSize: 12,
                  }}
                >
                  username already in use
                </Text>
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
                  isEmailFocused && {
                    borderWidth: 0.8,
                    borderColor: "lightgray",
                  },
                  emailError && {
                    borderWidth: 0.8,
                    borderColor: "red",
                    marginTop: moderateScale(1),
                  },
                  error === "Request failed with status code 409" && {
                    borderWidth: 0.8,
                    borderColor: "red",
                    marginTop: moderateScale(1),
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
                    onChangeText={(newEmail) => {
                      setEmail(newEmail);
                    }}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    style={{
                      flex: 1,
                      position: "relative",
                      fontSize: 16,
                      zIndex: 0,
                      height: "100%",
                    }}
                    caretHidden={false}
                    keyboardType="email-address"
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
                <Text
                  style={{
                    color: "red",
                    marginLeft: moderateScale(9),
                    fontSize: 12,
                  }}
                >
                  {emailError}
                </Text>
              ) : null}

              {error === "Request failed with status code 409" ? (
                <Text
                  style={{
                    color: "red",
                    marginLeft: moderateScale(9),
                    fontSize: 12,
                  }}
                >
                  email already in use
                </Text>
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
                    marginTop: moderateScale(1),
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
                    caretHidden={false}
                    keyboardType="numbers-and-punctuation"
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
                <Text
                  style={{
                    color: "red",
                    marginLeft: moderateScale(9),
                    fontSize: 12,
                  }}
                >
                  {passwordError}
                </Text>
              ) : null}
            </View>
          </View>
          
          <View style={{ marginTop: moderateScale(10) }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Forgot Password?
            </Text>
          </View>
          <View style={{ marginTop: moderateScale(50) }}>
            <Button
              label={"Sign up"}
              onPress={() => handleSignOut(email, username, password)}
            />
          </View>
          <View 
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
               marginVertical:moderateScale(20)
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
        </KeyboardAvoidingView>
        
         
          
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
         
          <Pressable
            onPress={() => navigation.navigate("SignIn")}
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:moderateScale(50)
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#a4a4a4" }}>
              Don’t have an account?
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#000000" }}>
              Sign in
            </Text>
          </Pressable>
        </View>
      
    </SafeAreaView>
  );
};

export default SignOut;

const styles = StyleSheet.create({});
