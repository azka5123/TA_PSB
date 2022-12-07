import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import List_Pelajaran_HTML from "./List_Pelajaran_HTML";
import List_Pelajaran_CSS from "./List_Pelajaran_CSS";
import List_Pelajaran_JS from "./List_Pelajaran_JS";
import List_Pelajaran_PHP from "./List_Pelajaran_PHP";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MateriHTML1 from '../Pelajaran_html/MateriHTML1';
import MateriHTML2 from '../Pelajaran_html/MateriHTML2';
import MateriHTML3 from '../Pelajaran_html/MateriHTML3';
import MateriHTML4 from '../Pelajaran_html/MateriHTML4';
import MateriHTML5 from '../Pelajaran_html/MateriHTML5';
import MateriHTML6 from '../Pelajaran_html/MateriHTML6';
import MateriHTML7 from '../Pelajaran_html/MateriHTML7';
import MateriHTML8 from '../Pelajaran_html/MateriHTML8';
import MateriHTML9 from '../Pelajaran_html/MateriHTML9';
import MateriHTML10 from '../Pelajaran_html/MateriHTML10';

import MateriCSS1 from '../Pelajaran_css/MateriCSS1';
import MateriCSS2 from '../Pelajaran_css/MateriCSS2';


import Materi1JS from '../Pelajaran_js/Materi1JS';
import Materi2JS from '../Pelajaran_js/Materi2JS';
import Materi3JS from '../Pelajaran_js/Materi3JS';
import Materi4JS from '../Pelajaran_js/Materi4JS';
import Materi5JS from '../Pelajaran_js/Materi5JS';
import Materi6JS from '../Pelajaran_js/Materi6JS';
import Materi7JS from '../Pelajaran_js/Materi7JS';
import Materi8JS from '../Pelajaran_js/Materi8JS';
import Materi9JS from '../Pelajaran_js/Materi9JS';

import MateriPHP1 from '../Pelajaran_php/MateriPHP1';


const Stack = createNativeStackNavigator();

export default function Router1() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List Pelajaran HTML" component={List_Pelajaran_HTML} />
          <Stack.Screen name="Materi 1 HTML" component={MateriHTML1}/>
          <Stack.Screen name="Materi 2 HTML" component={MateriHTML2}/>
          <Stack.Screen name="Materi 3 HTML" component={MateriHTML3}/>
          <Stack.Screen name="Materi 4 HTML" component={MateriHTML4}/>
          <Stack.Screen name="Materi 5 HTML" component={MateriHTML5}/>
          <Stack.Screen name="Materi 6 HTML" component={MateriHTML6}/>
          <Stack.Screen name="Materi 7 HTML" component={MateriHTML7}/>
          <Stack.Screen name="Materi 8 HTML" component={MateriHTML8}/>
          <Stack.Screen name="Materi 9 HTML" component={MateriHTML9}/>
          <Stack.Screen name="Materi 10 HTML" component={MateriHTML10}/>

          <Stack.Screen name="List Pelajaran CSS" component={List_Pelajaran_CSS} />
          <Stack.Screen name="Materi 1 CSS" component={MateriCSS1}/>
          <Stack.Screen name="Materi 2 CSS" component={MateriCSS2}/>


          <Stack.Screen name="List Pelajaran JS" component={List_Pelajaran_JS} />
          <Stack.Screen name="Materi1" component={Materi1JS}/>
          <Stack.Screen name="Materi2" component={Materi2JS}/>
          <Stack.Screen name="Materi3" component={Materi3JS}/>
          <Stack.Screen name="Materi4" component={Materi4JS}/>
          <Stack.Screen name="Materi5" component={Materi5JS}/>
          <Stack.Screen name="Materi6" component={Materi6JS}/>
          <Stack.Screen name="Materi7" component={Materi7JS}/>
          <Stack.Screen name="Materi8" component={Materi8JS}/>
          <Stack.Screen name="Materi9" component={Materi9JS}/>
          <Stack.Screen name="List Pelajaran PHP" component={List_Pelajaran_PHP} />
         
        </Stack.Navigator>
        </NavigationContainer>
    )
  }