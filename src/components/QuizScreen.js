import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { submitQuizQuestionsRequest } from "../redux-store/actions/quiz.actions";
import Button from "./Button";
import { useState } from "react";
import { AlertBox } from "./AlertBox";
import { moderateScale } from "react-native-size-matters";
const QuizScreen = ({ questions }) => {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const currentQuestion = questions[currentQuestionIndex];
 
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log("selectedOption:", selectedOption);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!selectedOption) {
      AlertBox(
        "Select option",
        "Please select an option before going to the next question"
      );
      return;
    }
    dispatch(
      submitQuizQuestionsRequest(selectedOption, currentQuestion.userDBKey)
    );
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected answer for the next question
    } else {
      // Quiz completed, navigate to result screen or display result here
      navigation.replace("Home");
    }
  };

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <View
        style={{
          flex: 1,
          margin: moderateScale(20),
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: moderateScale(50) }}>
          <Text style={{ fontSize: 24, fontWeight: "500" }}>
            Quiz started...
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#2C3539" }}>
            Please select option before going to the next question.
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginVertical: moderateScale(10),
              fontSize: 22,
              fontWeight: "400",
            }}
          >
            {currentQuestion.question}
          </Text>
          <View style={{ marginTop: moderateScale(10) }}>
            {currentQuestion.options.map((option, index) => (
              <Pressable
                onPress={() => handleOptionChange(option)}
                key={index}
                style={[
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: moderateScale(50),
                    width: "100%",
                    borderWidth: 0.8,
                    marginBottom: moderateScale(7),
                    borderRadius: 14,
                    backgroundColor: "#F9FAFB",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  selectedOption == option && {
                    borderColor: "green",
                    
                    backgroundColor: "#93E9BE",
                    elevation:5
                  },
                ]}
              >
                <Text
                  style={[
                    { fontSize: 16, fontWeight: "400" },
                    selectedOption == option && {
                     fontSize:20,
                     fontWeight:'600'
                    },
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ marginBottom: moderateScale(50) }}>
          <Button label={"submit"} onPress={() => handleNextQuestion()} />
        </View>
      </View>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
