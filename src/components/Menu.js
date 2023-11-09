import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Menu = (props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginHorizontal: 25,
        flexDirection: "row",
        marginTop: 20,
        paddingBottom: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{ flex: 1 }}
      >
        <Text style={{ fontWeight: "bold" }}>{props.signupText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{ flex: 1 }}
      >
        <Text style={{ fontWeight: "bold" }}>{props.signinText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <Text style={{ fontWeight: "bold" }}>{props.forgotPasswordText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
