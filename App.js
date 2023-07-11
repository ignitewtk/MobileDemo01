import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'

import Authentication from './Views/Authentication';
import SessionList from './Components/SessionList';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text> Home </Text>
      <Button title="Next" 
        onPress={() => 
          navigation.navigate('Profile', {name:'Admin'})}/>
    </View>    
  )
}

const ProfileScreen = ({navigation, route}) => {
  return <Text> This is {route.params.name}'s profile'. </Text>
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Authentication} />
        <Stack.Screen 
          name="SessionList"
          component={SessionList} />
        <Stack.Screen
          name="Welcome"
          component={HomeScreen}
          options={{title:"Welcome"}} />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

