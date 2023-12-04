import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submit, setSubmit] = useState(false);

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("LOGIN SUCCESS"))
        .catch(() => Alert.alert("Login error", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <Image
          style={{
            width: "100%",
            height: "140%",
            resizeMode: "stretch",
            position: "absolute",
          }}
          source={require("../assets/bg.png")}
        />
        <Text
          style={{
            textAlign: "center",
            marginVertical: 80,
            paddingBottom: 20,
            color: "#F2F2F2",
            fontWeight: 600,
            fontSize: 30,
          }}
        >
          KanginKauh
        </Text>
      </View>
      <View style={styles.sheetContainer}>
        <View style={styles.sheet}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
          <View style={styles.divider}></View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            autoCorrect={false}
            textContentType="password"
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <View style={styles.divider}></View>
          <Pressable
            style={({ pressed }) => [
              {
                marginHorizontal: 12,
                backgroundColor: pressed ? "#6969CA" : "#393AAA",
                padding: 15,
                alignItems: "center",
              },
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 15,
              marginHorizontal: 12,
              justifyContent: "center",
            }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={{ marginLeft: 5 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#393AAA",
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", marginTop: 10, right: 5 }}
          >
            <Image
              style={{ width: 200, height: 200, resizeMode: "stretch" }}
              source={require("../assets/texting.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    backgroundColor: "#2E3191",
    justifyContent: "center",
  },
  sheetContainer: {
    bottom: 20,
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheet: {
    paddingTop: 20,
  },
  inputLabel: {
    paddingHorizontal: 10,
    fontSize: 17,
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: "#808496",
  },
  button: {},
  buttonText: {
    color: "white",
  },
  divider: {
    marginVertical: 5,
  },
});
