import React , {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";



const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return(
        <View>
            <Button title="Increase" onPress={() => {
                //counter++
                setCounter(counter + 1)
            }}></Button>
            <Button title="Decrease" onPress={() => {
                //counter--
                setCounter(counter - 1)
            }}></Button>
            <Text style={styles.textStyle}>Current Count : {counter}</Text>
        </View>
    )


}


const styles = StyleSheet.create({
    textStyle : {
        fontSize : 30
    }
})


export default CounterScreen;