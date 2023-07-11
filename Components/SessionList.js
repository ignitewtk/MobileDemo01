import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'


function SessionItem(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={styles.icon} />
            <Text style={styles.name}> {props.username} </Text>
            <Button title="Delete" color="red"/>
        </View>
    )
}

const items = []
for (let i=0; i < 5; i++) {
    items.push("User"+i)
}

export default function SessionList() {
  return (
    <ScrollView style={styles.container}>
        {
            items.map((item, index) => (
                <SessionItem key={index} username={item}/>
            ))
        }
      
    </ScrollView>
  );
}

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
})