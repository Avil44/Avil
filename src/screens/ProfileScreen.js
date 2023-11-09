import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { globalStyles } from "../styles/global";

function ProfileScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Ambil data nama dan email dari penyimpanan lokal (AsyncStorage)
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setName(parsedUserData.name);
          setEmail(parsedUserData.email);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.header}>Halaman Profil</Text>
      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 18 }}>Nama : {name}</Text>
        <Text style={{ fontSize: 18 }}>Email : {email}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          // Navigasi kembali ke halaman utama
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.textButton}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    width: 150,
    fontSize: 18,
    textAlign: "center",
    padding: 18,
    backgroundColor: "crimson",
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default ProfileScreen;
