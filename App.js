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