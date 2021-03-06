import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WELCOME, LOGIN, SIGNUP } from '../consts/ConstsNavigation';
import WelcomeScreen from '../views/welcome/WelcomeScreen';
import LoginScreen from '../views/login/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator  headerMode='none'>
                 <Stack.Screen name={WELCOME} component={WelcomeScreen} />
                 <Stack.Screen name={LOGIN} component={LoginScreen} />
                 <Stack.Screen name={SIGNUP} component={Login} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigation;
