import { StyleSheet, View, Alert, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import userImg from "../assets/user.png";

export default function MyProfile({ navigation }) {
  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Profile</Text>
        </View>
        <View style={styles.profile}>
          <Avatar.Image size={150} source={userImg} />
          <Text style={styles.username}>Vivek Nimbolkar</Text>
        </View>
        <View style={styles.achievementsection}>
          <View style={styles.achievementBox}>
            <Text style={styles.achieveSectionText}>17</Text>
            <Text style={styles.achieveSectionText}>Courses</Text>
          </View>
          <View style={styles.achievementBox}>
            <Text style={styles.achieveSectionText}>11</Text>
            <Text style={styles.achieveSectionText}>Certificates</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text
              onPress={() => navigation.navigate("Settings")}
              style={styles.menuItemText}
            >
              Settings
            </Text>
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
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
  profile: {
    backgroundColor: "#2ee6e2",
    alignItems: "center",
    padding: 20,
    margin: 15,
    borderRadius: 10,
  },
  username: {
    color: "white",
    fontSize: 30,
    marginTop: 10,
    fontWeight: "600",
  },
  achievementsection: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  achievementBox: {
    color: "white",
    alignItems: "center",
  },
  achieveSectionText: {
    fontSize: 22,
    fontWeight: "600",
  },
  menu: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  menuItem: {
    padding: 14,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
});
