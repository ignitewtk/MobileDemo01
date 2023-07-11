import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react'
import SessionList from './Components/SessionList';

export default function App() {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/favicon.png')} />
      <TextInput style={styles.textInput} placeholder='Username'/>

      <TextInput style={styles.textInput} placeholder='Password'/>
      <Button title="Submit">  </Button>
      <SessionList />
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
