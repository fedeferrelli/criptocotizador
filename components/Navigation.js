// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './Principal';
import Detail from './Detail';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (

    <NavigationContainer >

      <Stack.Navigator 
        initialRouteName="Principal"
        >
        <Stack.Screen 
            name="Principal" 
            component={Principal}
            options={{ title: 'Criptocotizador',headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
             }} />


        <Stack.Screen 
            name="Detalle" 
            component={Detail}
            options={{
              title: 'Detalle',
              headerTitleAlign: 'center',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />


      </Stack.Navigator>


    </NavigationContainer> 
  );
}

export default Navigation;