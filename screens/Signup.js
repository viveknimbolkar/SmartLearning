import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Checkbox } from "react-native-paper";

export default function Signup({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);


  return (
    <>
      <View style={{ backgroundColor: "white", height: 900 }}>
        <View style={styles.uppercontainer}>
          <Text style={styles.heading}>Create an account to continue</Text>
        </View>
        <View style={styles.lowercontainer}>
        <TextInput
            placeholder="Full Name"
            style={styles.inputfield}
            label="Name"
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            placeholder="Email"
            style={styles.inputfield}
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputfield}
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Confirm password"
            style={styles.inputfield}
            label="Password"
            value={confirmPassword}
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          />
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.label}>Remember me</Text>
          
          </View>
          <TouchableOpacity
            style={styles.loginbtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.loginbtntext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "700",
    marginTop: 65,
  },
  uppercontainer: {
    backgroundColor: "#2ee6e2",
    height: 150,
    alignItems: "center",
  },
  lowercontainer: {
    backgroundColor: "white",
    margin: 20,
    marginTop: 90,
  },
  inputfield: {
    // borderColor: "#34F6F2",
    borderColor:"#FFD639",
    borderWidth: 2,
    height: 60,
    borderRadius: 7,
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    margin: 4,
    fontWeight: "600",
    fontSize: 20,
    color: "#7a7a7a",
  },
  loginbtn: {
    borderColor: "#FFD639",
    backgroundColor: "#FFD639",
    borderWidth: 2,
    borderRadius: 7,
    color: "black",
    alignItems: "center",
    height: 60,
    justifyContent: "center",
  },
  loginbtntext: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  forget: {
    margin: 8,
    fontWeight: "600",
    fontSize: 16,
    color: "blue",
  }
});
