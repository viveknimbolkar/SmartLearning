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

export default function Login({ navigation }) {
  const [text, setText] = useState("");
  const [password, setpassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={{ backgroundColor: "white", height: 900 }}>
        <View style={styles.uppercontainer}>
          <Text style={styles.heading}>Login to continue</Text>
        </View>
        <View style={styles.lowercontainer}>
          <TextInput
            placeholder="Email"
            style={styles.email}
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.password}
            label="Password"
            value={password}
            onChangeText={(password) => setpassword(password)}
          />
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.label}>Remember me</Text>
            <Pressable onPress={()=>console.log("forget password")}>
              <Text style={styles.forget}>Forget password?</Text>
            </Pressable>
          </View>
          <TouchableOpacity
            style={styles.loginbtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.loginbtntext}>Login</Text>
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
  email: {
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
  password: {
    borderColor: "#FFD639",
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
