import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  _ScrollView
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
    <View style={styles.screen}>
      <TitleText>Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber} </BodyText>
      <BodyText>The number was: {props.userNumber}</BodyText>
      <MainButton onPress={props.onRestart}>New game</MainButton>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
});

export default GameOverScreen;
