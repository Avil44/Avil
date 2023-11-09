import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import LoginButton from "../components/LoginButton";
import TextInputEmail from "../components/TextInputEmail";
import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password harus diisi");
      return;
    }

    if (password.length < 3) {
      Alert.alert("Error", "Password harus memiliki setidaknya 6 karakter");
      return;
    }

    try {
      // Ambil data registrasi dari penyimpanan lokal
      const userData = await AsyncStorage.getItem("userData");

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        if (
          parsedUserData.email === email &&
          parsedUserData.password === password
        ) {
          // Data login sesuai dengan data registrasi yang ada
          // Redirect ke halaman utama
          navigation.navigate("HalamanHome");
          return;
        }
      }

      // Jika tidak ada data registrasi yang cocok atau data tidak tersedia
      Alert.alert("Error", "Email atau password salah");
    } catch (error) {
      console.error("Gagal mengambil data registrasi:", error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#dbe4f3" }}>
      <StatusBar backgroundColor={"#dbe4f3"} barStyle="dark-content" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Image
          source={require("../images/insia.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          CODE<Text style={{ color: "#2396F2" }}>AVIL</Text>
        </Text>
        <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
          Login
        </Text>
      </View>

      <TextInputEmail
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukkan email"
        isPassword={false}
      />
      <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="masukkan password"
        isPassword={true}
      />

      <LoginButton handleLogin={handleLogin} text="Login" color="#2396F2" />

      <Menu signupText="Daftar" />
    </ScrollView>
  );
};

export default LoginScreen;
