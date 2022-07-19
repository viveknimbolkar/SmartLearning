// import { Text,StyleSheet,View } from "react-native";
// export default function Rateus() {
//   return (
//     <>
//       <View style={styles.header}>
//         <Text style={styles.headertext}>Rate us</Text>
//       </View>
//     </>
//   );
// }


import React from "react";
import { View, Button,StyleSheet,Text } from "react-native";
import Rate, { AndroidMarket } from "react-native-rate";

export default class Rateus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rated: false,
    };
  }

  render() {
    return (
      <>
        <View style={styles.header}>
         <Text style={styles.headertext}>Rate us</Text>
       </View>
        <View style={{ marginTop: 50 }}>
          <Button
            title="Rate App"
            onPress={() => {
              const options = {
                GooglePackageName: "com.smart.learning",
                preferredAndroidMarket: AndroidMarket.Google,
                preferInApp: false,
                openAppStoreIfInAppFails: true,
                fallbackPlatformURL: "http://www.google.com",
              };
              Rate.rate(options, (success, errorMessage) => {
                if (success) {
                  // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                  this.setState({ rated: true });
                }
                if (errorMessage) {
                  // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
                  console.error(
                    `Example page Rate.rate() error: ${errorMessage}`
                  );
                }
              });
            }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
});