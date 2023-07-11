import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, View, TextInput, Button, Image } from 'react-native';

import React, { useState } from 'react'

export default function Authentication({navigation}) {

  const [username, setUsername] = useState("")
  const _usernameChange = (newText) => {
    console.log(newText)
    setUsername(newText)
  }
  const _onSubmit = (params) => {
    console.log('customer1')
    fetch('http://backend202307112242.azurewebsites.net/webapp/page2', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //   userName: 'customer1',
      //   password: 'customer1'
      // })
    })
    .then(response => response.json()).then((json) => {
      console.log(json.message)
    })
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/favicon.png')} />
      <TextInput style={styles.textInput} placeholder='Username'
        onChangeText={newText => setUsername(newText)} 
        />
      <TextInput style={styles.textInput} placeholder='Password'/>
      <Button title="Next" 
        onPress={() => navigation.navigate('SessionList', {name: username})} />
      <Button title="Sign In" 
        onPress={_onSubmit} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    margin: 10,
    width: 250,
    height: 40,
    borderWidth: 1, 
    borderColor: "#f0eded",
  },
  
  logo: {
    margin: 10
  }
});
