import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const handleLogin = () => {
  //   if (email !== "" && password !== "") {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then(() => console.log("LOGIN SUCCESS"))
  //       .catch(() => Alert.alert("Login error", err.message));
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 60,
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
            onChangeText={(e) => setEmail(e.toLocaleLowerCase())}
            value={email}
          />
          <View style={styles.divider}></View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <View style={styles.divider}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log({ email, password })}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", marginTop: 50, right: 5 }}
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
  button: {
    marginHorizontal: 12,
    backgroundColor: "#393AAA",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  divider: {
    marginVertical: 5,
  },
});
