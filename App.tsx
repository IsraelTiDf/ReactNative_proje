import React from 'react';
import { Home } from './src/screens/Home';
import { Signin } from './src/screens/Signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}} />
        <Stack.Screen name="Signin" component={Signin}/>
        
        
      </Stack.Navigator>
  </NavigationContainer>
  );
}