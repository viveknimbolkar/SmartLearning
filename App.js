import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Switcher from "./screens/Switcher";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import MyProfile from "./screens/MyProfile";
import Reports from "./screens/Reports";
import Settings from "./screens/Settings";
import Aboutus from "./screens/Aboutus";
import Credits from "./screens/Credits";
import CareerPath from "./screens/CareerPath";
import Feedback from "./screens/Feedback";
import Rateus from "./screens/Rateus";
import Quizes from "./screens/Quizes";
import StartPreparing from "./screens/StartPreparing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Switcher" component={Switcher} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="Reports" component={Reports} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Aboutus" component={Aboutus} />
          <Stack.Screen name="CareerPath" component={CareerPath} />
          <Stack.Screen name="Credits" component={Credits} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="Rateus" component={Rateus} />
          <Stack.Screen name="Quizes" component={Quizes} />
          <Stack.Screen name="StartPreparing" component={StartPreparing} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
