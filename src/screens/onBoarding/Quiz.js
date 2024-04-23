import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import QuizScreen from "../../components/QuizScreen";
import { moderateScale } from "react-native-size-matters";
import quizpng from "../../../assets/images/quiz.png";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getQuizQuestionsRequest } from "../../redux-store/actions/quiz.actions";
import { AlertBox } from "../../components/AlertBox";

const Quiz = () => {
  const [isQuizStarted, setIsQuizstarted] = useState(false);
  const dispatch = useDispatch();
  const { questions, isLoading, error } = useSelector((state) => state.quiz);

  const handleQuiz = () => {
    setIsQuizstarted(true);
  };

  

  useEffect(() => {
    console.log("i am here ");
    (async () => {
      await dispatch(getQuizQuestionsRequest());
    })();
  }, []);

  if (error === "Request failed with status code 500") {
    return AlertBox(
      "Quiz Failed",
      "Something went wrong while quiz loading. Please try again later"
    );
  }

  if (isQuizStarted) {
    return <QuizScreen questions={questions} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{
          flex: 1,
          margin: moderateScale(20),
          marginTop: moderateScale(70),
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 24, fontWeight: "500" }}>
            Complete Profile
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#2C3539" }}>
            Complete your profile with Quiz to get started
          </Text>
        </View>
        <View>
          <Image
            source={quizpng}
            style={{
              width: moderateScale(320),
              height: moderateScale(320),
              alignSelf: "center",

              borderWidth: 1,
              borderColor: "#A4A4A4",
              borderRadius: moderateScale(20),
              marginHorizontal: moderateScale(20),
              marginBottom: moderateScale(20),
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ marginBottom: moderateScale(40) }}>
          <Button label={"Start Quiz"} onPress={() => handleQuiz()} />
        </View>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
