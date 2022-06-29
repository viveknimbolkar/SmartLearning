import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Settings({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headertext}>Settings</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quizes")}
          style={styles.menuItem}
        >
          <Ionicons name="code-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Quizes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CareerPath")}
          style={styles.menuItem}
        >
          <Ionicons name="walk-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Your Career Path</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Credits")}
          style={styles.menuItem}
        >
          <Ionicons name="golf-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Credits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Aboutus")}
          style={styles.menuItem}
        >
          <Ionicons name="people-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>About us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Feedback")}
          style={styles.menuItem}
        >
          <Ionicons name="alert-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Leave Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("StartPreparing")}
          style={styles.menuItem}
        >
          <Ionicons name="book" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Start Preparing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Rateus")}
          style={styles.menuItem}
        >
          <Ionicons name="star-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Rate us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Do you want to logout?",
              "You will not learn anymore. Byeeee!",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]
            );
          }}
          style={styles.menuItem}
        >
          <Ionicons name="log-out-outline" color={"#2ee6e2"} size={26} />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {},
  header: {
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },
  headertext: {
    fontSize: 30,
    fontWeight: "700",
    color: "black",
  },
  menu: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  menuItem: {
    padding: 14,
    flexDirection: "row",
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
});
