import React from "react";
import { Text , StyleSheet, View , FlatList} from "react-native";


const ListScreen = () => {

    const friends = [
        {name : 'Friend #1' , age: '1'},
        {name : 'Friend #2' , age: '2'},
        {name : 'Friend #3' , age: '3'},
        {name : 'Friend #4' , age: '4'},
        {name : 'Friend #5' , age: '5'},
        {name : 'Friend #6' , age: '6'},
        {name : 'Friend #7' , age: '7'},
    ]

    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name} 
            data={friends}
            renderItem={({item}) => {
                return (
                    <View>
                    <Text style={styles.textStyle}>Name : {item.name}</Text>
                    <Text style={styles.textStyle}>Age : {item.age}</Text>
                    </View>
                )
            }}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical:50,
        fontSize : 30,
        textAlign : "center"
    }
})

export default ListScreen;