import { StyleSheet, View, Alert, Text, TouchableOpacity } from "react-native";
import { Avatar, Searchbar } from "react-native-paper";
import { useState } from "react";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <View>
        <View style={styles.header}>
          <Text style={styles.headertext}>Search Courses</Text>
        </View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ marginLeft: 10, marginRight: 10, height: 60 }}
        />
      </View>
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
});
