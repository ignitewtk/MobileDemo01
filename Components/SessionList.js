import { Alert, StyleSheet, Text, TextInput, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


function SessionItem(props) { 
    const [username, setUsername] = useState('');
    _delete = () => {
        Alert.alert("Do you want to delete this?")
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={styles.icon} />
            <Text style={styles.name}> {props.username} </Text>
            <Button title="Delete" color="red" onPress={_delete} />
        </View>
    )
}

const items = []
for (let i=0; i < 5; i++) {
    items.push("User"+i)
}

const SessionList = ({navigation, route}) => {

    _search = () => {
        Alert.alert("searching...")
    }

    return (
        <View>
            <Text> Welcome, {route.params.name} !</Text>
            <View style={styles.container}>
                <TouchableOpacity onPress={_search}>
                    <Ionicons name="search" size={30} color="#d4d9d6" margin={5} padding={10}/>
                </TouchableOpacity>
                <TextInput style={styles.textInput}/>
            </View>
            <ScrollView style={styles.container}>
                {
                    items.map((item, index) => (
                        <SessionItem key={index} username={item}/>
                        ))
                }
            </ScrollView>
        </View>
        
    );
}

export default SessionList;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%"
    },
    name: {
        margin: 10,
        padding: 10,
        width: 200,
        height: 60,
        backgroundColor: "#d4d9d6"
    },
    icon: {
        margin: 10,
        padding: 10,
        height: 60,
        width: 60,
        backgroundColor: "#c7c9c8"  
    },
    textInput: {
        margin: 10,
        width: 250,
        height: 40,
        borderWidth: 1, 
        borderColor: "#d4d9d6",
    },
    searchIcon: {
        margin: 10,
        width: 40,
        height: 40,
    },

})