// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './Principal';
import Detail from './Detail';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen 
            name="Principal" 
            component={Principal}
            options={{ title: 'Criptocotizador' }} />


        <Stack.Screen 
            name="Detalle" 
            component={Detail}
            options={{ title: 'Detalle' }} />


      </Stack.Navigator>


    </NavigationContainer> 
  );
}

export default Navigation;