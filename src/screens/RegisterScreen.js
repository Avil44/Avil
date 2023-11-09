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
import Icon from "react-native-vector-icons/FontAwesome5";
import RegisterButton from "../components/RegisterButton";
import TextInputEmail from "../components/TextInputEmail";
import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Semua kolom harus diisi");
      return;
    }

    if (password.length < 3) {
      Alert.alert("Error", "Password harus memiliki setidaknya 3 karakter");
      return;
    }

    // Simpan data registrasi ke penyimpanan lokal
    const userData = { name, email, password };
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      Alert.alert("Berhasil", "Data registrasi berhasil disimpan!");
      console.log("Data registrasi berhasil disimpan");
    } catch (error) {
      Alert.alert("Gagal", "Data registrasi gagal disimpan!");
      console.error("Gagal menyimpan data registrasi:", error);
    }

    // Redirect ke halaman login setelah registrasi berhasil
    navigation.navigate("Login");
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
          Register
        </Text>
      </View>

      <TextInputEmail
        state={name}
        set={setName}
        icon="user"
        placeholder="Masukkan Nama"
        isPassword={false}
      />
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

      <RegisterButton
        text="Register"
        color="#2396F2"
        handleRegister={handleRegister}
      />

      <Menu signinText="Login" />
    </ScrollView>
  );
};

export default RegisterScreen;
