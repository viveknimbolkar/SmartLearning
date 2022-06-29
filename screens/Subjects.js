import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Avatar, Card } from "react-native-paper";

const physicsImg = require("../assets/physics.jpg");
const mathImg = require("../assets/math.jpg");
const biologyImg = require("../assets/biology.png");
const historyImg = require("../assets/history.png");
const englishImg = require("../assets/english1.png");
const marathiImg = require("../assets/marathi.png");
const economicsImg = require("../assets/economics1.png");
const chemistry = require("../assets/chemistry.png");

export default function Subjects() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headertext}>Subjects</Text>
      </View>
      <ScrollView>
        <Card.Title
          style={styles.card}
          title="Physics"
          subtitle="The world of magic"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={physicsImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
        <Card.Title
          style={styles.card3}
          title="Math"
          subtitle="The world of numbers"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={mathImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title3}
          subtitleStyle={styles.subtitle3}
        />

        <Card.Title
          style={styles.card2}
          title="Biology"
          subtitle="The world of cells"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={biologyImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title2}
          subtitleStyle={styles.subtitle2}
        />

        <Card.Title
          style={styles.card}
          title="History"
          subtitle="The history of humans"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={historyImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
        <Card.Title
          style={styles.card3}
          title="English"
          subtitle="The world of english"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={englishImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title3}
          subtitleStyle={styles.subtitle3}
        />

        <Card.Title
          style={styles.card2}
          title="Marathi"
          subtitle="The world of marathi"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={marathiImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title2}
          subtitleStyle={styles.subtitle2}
        />

        <Card.Title
          style={styles.card}
          title="Economics"
          subtitle="The world of money"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={economicsImg} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
        {/* use pressable to get click events */}
        {/* <Pressable onPress={()=>console.log("working")}> */}
        <Card.Title
          style={styles.card3}
          title="Chemistry"
          subtitle="The world of magic"
          left={(props) => (
            <Pressable>
              <Avatar.Image source={chemistry} size={110} />
            </Pressable>
          )}
          titleStyle={styles.title3}
          subtitleStyle={styles.subtitle3}
        />
        {/* </Pressable> */}
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
  card: {
    backgroundColor: "#2ee6e2",
    borderRadius: 10,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 130,
  },
  title: {
    fontSize: 30,
    marginLeft: 65,
    color: "white",
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 65,
    color: "white",
  },
  card2: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    height: 130,
  },
  title2: {
    fontSize: 30,
    marginLeft: 65,
  },
  subtitle2: {
    fontSize: 12,
    marginLeft: 65,
  },
  card3: {
    backgroundColor: "#FFD639",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    height: 130,
  },
  title3: {
    fontSize: 30,
    marginLeft: 65,
  },
  subtitle3: {
    fontSize: 12,
    marginLeft: 65,
  },
});
