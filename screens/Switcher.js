import {
  Text,
  Image,
  View,
  StyleSheet,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import bookImage from "../assets/book.png";
export default function Switcher({ navigation }) {
  return (
    <>
      <View style={styles.uppercontainer}>
        <Image source={bookImage} style={styles.img} />
      </View>
      <View style={styles.lowercontainer}>
        <TouchableOpacity
          style={styles.loginbtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupbtn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.btntext}>Sign UP</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() =>
            Alert.alert(
              "Other accounts",
              "You can login with Google, Facebook or Linkedin."
            )
          }
        >
          <Text style={styles.loginwith}>Log in with</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  uppercontainer: {
    backgroundColor: "#34F6F2",
    height: 250,
    alignItems: "center",
  },
  lowercontainer: {
    alignItems: "center",
    backgroundColor: "white",
    height: 500,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
  loginbtn: {
    borderColor: "black",
    borderWidth: 2,
    width: 300,
    borderRadius: 12,
    margin: 8,
    marginTop: 90,
    color: "black",
    alignItems: "center",
    height: 60,
    justifyContent: "center",
  },
  signupbtn: {
    borderColor: "FFFF00",
    width: 300,
    backgroundColor: "#FFD639",
    borderRadius: 12,
    margin: 8,
    color: "#4a4a4a",
    alignItems: "center",
    height: 60,
    justifyContent: "center",
  },
  btntext: {
    fontSize: 28,
    fontWeight: "700",
  },
  loginwith: {
    color: "blue",
    fontSize: 26,
    fontWeight: "600",
    marginTop: 160,
  },
});
