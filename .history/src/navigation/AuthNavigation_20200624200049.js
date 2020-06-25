import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WELCOME, LOGIN, SIGNUP } from '../consts/ConstsNavigation';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator  headerMode='none'>
                 <Stack.Screen name={WELCOME} component={Login} />
                 <Stack.Screen name={LOGIN} component={Login} />
                 <Stack.Screen name={SIGNUP} component={Login} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigation;
