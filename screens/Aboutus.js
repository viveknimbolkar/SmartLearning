import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Aboutus() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headertext}>About us</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/business-people-teamwork-suit-clothes_40876-2435.jpg",
            }}
            style={styles.cardImg}
          />
          <View style={styles.founderContainer}>
            <Text style={styles.founderHeading}>Our Founders</Text>

            <View style={styles.founderCard}>
              <Image
                source={{
                  uri: "https://sugermint.com/wp-content/uploads/2020/04/Biography-of-Sundar-Pichai.jpg",
                }}
                style={styles.founderImg}
              />
              <Text style={styles.founderName}>Sundar Pichai</Text>
              <Text style={styles.founderPara}>
                Pichai Sundararajan, better known as Sundar Pichai, is an
                Indian-American business executive. He is the chief executive
                officer of Alphabet Inc. and its subsidiary Google. Born in
                Madurai, India, Pichai earned his degree from IIT Kharagpur in
                metallurgical engineering.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://en.wikipedia.org/wiki/Sundar_Pichai"
                  );
                }}
                style={styles.knowMoreBtn}
              >
                <Text style={styles.knowMoreText}>Knor More</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.founderCard}>
              <Image
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
                style={styles.founderImg}
              />
              <Text style={styles.founderName}>Satya Nadella</Text>
              <Text style={styles.founderPara}>
                Satya Narayana Nadella is an Indian-American business executive.
                He is the executive chairman and CEO of Microsoft, succeeding
                Steve Ballmer in 2014 as CEO and John W. Thompson in 2021 as
                chairman.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://en.wikipedia.org/wiki/Satya_Nadella"
                  );
                }}
                style={styles.knowMoreBtn}
              >
                <Text style={styles.knowMoreText}>Knor More</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.founderCard}>
              <Image
                source={{
                  uri: "https://en.wikipedia.org/wiki/Elon_Musk",
                }}
                style={styles.founderImg}
              />
              <Text style={styles.founderName}>Elon Musk</Text>
              <Text style={styles.founderPara}>
                Elon Reeve Musk FRS is a business magnate and investor. He is
                the founder, CEO, and Chief Engineer at SpaceX; angel investor,
                CEO, and Product Architect of Tesla, Inc.; founder of The Boring
                Company; and co-founder of Neuralink and OpenAI.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://en.wikipedia.org/wiki/Sundar_Pichai"
                  );
                }}
                style={styles.knowMoreBtn}
              >
                <Text style={styles.knowMoreText}>Knor More</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.socialMediaContainer}>
            <Text style={styles.founderHeading}>Connec with us</Text>
            <View style={styles.socialMedia}>
              <Ionicons
                onPressIn={() => {
                  Linking.openURL("https://www.instagram.com");
                }}
                name="logo-instagram"
                color={"red"}
                size={50}
              />
              <Ionicons name="logo-facebook" color={"#4267B2"} size={50} />
              <Ionicons name="logo-twitter" color={"#1DA1F2"} size={50} />
              <Ionicons name="logo-youtube" color={"#FF0000"} size={50} />
              <Ionicons name="logo-google" color={"#4285F4"} size={50} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
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
  container: {
    marginLeft: 10,
  },
  cardImg: {
    width: 350,
    height: 200,
  },
  founderCard: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  founderHeading: {
    fontSize: 26,
    fontWeight: "700",
  },
  founderName: {
    fontSize: 20,
    color: "#2ee6e2",
    fontWeight: "600",
  },
  founderImg: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  founderPara: {
    fontSize: 16,
    textAlign: "justify",
  },
  knowMoreBtn: {
    width: 200,
    height: 50,
    backgroundColor: "#2ee6e2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  knowMoreText: {
    fontSize: 16,
  },
  socialMedia: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
