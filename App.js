<<<<<<< HEAD
import React from 'react';
import { Text, View } from 'react-native';
import Home from './src/components/Home';

const App = () => {
  return (
    <View style={{ backgroundColor:"#0096FF" }}>
      <Home/>
    </View>
  );
}

export default App;
=======
import React,{Fragment,useEffect} from "react";
import { NativeBaseProvider, Box, Text, extendTheme } from "native-base";
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center" marginBottom="100px" marginTop="100px">Hello world</Box>
      <Text>asSdd</Text>
    </NativeBaseProvider>
  );
}
>>>>>>> 47f5996b33c61a97b8ecb4884d4deebf0480521d
