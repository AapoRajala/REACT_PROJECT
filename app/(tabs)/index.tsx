import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Aivan kusipaska koodikieli</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton:  {width: 100, 
    height: 50, 
    backgroundColor: "coral",
    borderRadius: 6, 
    textAlign: "center"}
})
