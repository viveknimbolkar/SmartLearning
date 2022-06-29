import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyProfile from "./MyProfile";
import Subjects from "./Subjects";
import Courses from "./Courses";
import Reports from "./Reports";
import Settings from "./Settings";

const Tab = createMaterialBottomTabNavigator();
export default function Home({ navigation }) {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: () => (
              <Ionicons name="person" color={"#2ee6e2"} size={26} />
            ),
          }}
          component={MyProfile}
          t
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="school" color={"#2ee6e2"} size={26} />
            ),
          }}
          name="Subjects"
          component={Subjects}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="book" color={"#2ee6e2"} size={26} />
            ),
          }}
          name="Courses"
          component={Courses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="pulse" color={"#2ee6e2"} size={26} />
            ),
          }}
          name="Reports"
          component={Reports}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="settings" color={"#2ee6e2"} size={26} />
            ),
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </>
  );
}
