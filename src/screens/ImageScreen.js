import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    
    
    return (
        <View>
            <ImageDetail title="Forest" imageToShow={require('../../assets/forest.jpg')} imageScore="9"></ImageDetail>
            <ImageDetail title="Beach" imageToShow={require('../../assets/beach.jpg')} imageScore="8"></ImageDetail>
            <ImageDetail title="Mountain" imageToShow={require('../../assets/mountain.jpg')} imageScore="7"></ImageDetail>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle  :{
        fontSize : 30
    }
})


export default ImageScreen;