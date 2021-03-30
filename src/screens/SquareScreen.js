import React , { useState } from "react";
import { Text , StyleSheet , View , Button, FlatList} from "react-native"
import ColorCounter from "../components/ColorCounter";


const SquareScreen = () => {

    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);


    return (
        <View>
            <ColorCounter 
                color="Red"
                onIncrease={()=> setRed(red + 10)}
                onDecrease={()=> setRed(red - 10)}
            ></ColorCounter>
            <ColorCounter 
                color="Green"
                onIncrease={()=> setGreen(green + 10)}
                onDecrease={()=> setGreen(green - 10)}
            ></ColorCounter>
            <ColorCounter 
                color="Blue"
                onIncrease={()=> setBlue(blue + 10)}
                onDecrease={()=> setBed(blue - 10)}
            ></ColorCounter>
            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
            <Text style={{fontSize:30}}>Red {red} Green {green} Blue {blue}</Text>
        </View>
    )
}


const styles = StyleSheet.create({})


export default SquareScreen;