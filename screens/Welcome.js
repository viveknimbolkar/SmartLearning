import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import bookImage from "../assets/book.png";
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.displaycontainer}>
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.description}>
          This is the description of the app.This is the description of the
          app.This is the description of the app.This is the
        </Text>
        <Image style={styles.bookImg} source={bookImage} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Switcher")}
        >
          <Text style={styles.btntext}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#34F6F2",
    height: 800,
  },
  displaycontainer: {
    margin: 10,
    marginTop: 100,
    alignItems: "center",
  },
  heading: {
    fontSize: 45,
    fontWeight: "700",
    color: "white",
    textTransform: "uppercase",
  },
  description: {
    color: "white",
    margin: 20,
    fontSize: 17,
  },
  bookImg: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: "yellow",
    marginTop: 30,
    borderRadius: 12,
    width: 250,
    alignItems: "center",
  },
  btntext: {
    fontSize: 30,
    fontWeight: "800",
    padding: 12,
    textTransform: "uppercase",
  },
});
