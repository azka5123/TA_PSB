import React from "react";
import { View, Image, Text } from "react-native";
import Style from "../styles/Style";

const Home = () => {
  return (
    <View>
      <Image style={Style.logo} source={require("../assets/logo.png")} />
      <Text>asd</Text>
    </View>
  );
};

export default Home;
