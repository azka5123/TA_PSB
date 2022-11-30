import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import List_Pelajaran_JS from "./List_Pelajaran_JS";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Materi1JS from '../Pelajaran_js/Materi1JS';

const Stack = createNativeStackNavigator();

export default function Router1() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List Pelajaran JS" component={List_Pelajaran_JS} />
          <Stack.Screen name="Materi1" component={Materi1JS}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
  }