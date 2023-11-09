import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";

function HomeScreen({ navigation }) {
  return (
    <View
      style={globalStyles.container}

      // source={require("../assets/background2.png")}
    >
      <Text style={styles.header}>Selamat Datang di Halaman Utama</Text>
      <Image
        source={require("../assets/logo-itenas.jpg")}
        style={styles.logo}
      />
      <Text style={styles.description}>Ini adalah halaman utama aplikasi.</Text>
      <TouchableOpacity
        title="Logout"
        onPress={() => {
          navigation.replace("Login");
        }}
      >
        <Text style={styles.textButton}>Logout</Text>
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
  description: {
    fontSize: 16,
    marginBottom: 50,
  },
  profileButton: {
    marginBottom: 20,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 8,
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

export default HomeScreen;
