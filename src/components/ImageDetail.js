import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageToShow}></Image>
            <Text>{props.title}</Text>
            <Text>Score : {props.imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle  :{
        fontSize : 30
    }
})


export default ImageDetail;