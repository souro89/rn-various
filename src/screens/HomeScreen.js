import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Check</Text>
      <Button
        onPress={() => console.log('Button Pressed!!')}
        title="Go to Components Demo"
      ></Button>
      <TouchableOpacity onPress={() => console.log('TO Pressed!!')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
