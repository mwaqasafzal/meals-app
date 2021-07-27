import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MealsNavigator from './navigations/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();


const loadAsync = ()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading 
                startAsync={loadAsync}
                onError={e=>console.log(e)} 
                onFinish={()=>setFontLoaded(true)}/>
  }

  return <MealsNavigator/>
}

