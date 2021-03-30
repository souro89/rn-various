import React from "react";
import { Text , StyleSheet, View } from "react-native";


const ComponentsScreen = () => {

    const greeting = "Hi There !";

    return (
        <View>
        <Text style={styles.textStyle}>This is me!</Text>
        <Text style={styles.textStyle1}>{greeting}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50
    },
    textStyle1:{
        fontSize:20
    }
})



export default ComponentsScreen;