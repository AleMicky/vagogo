import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH, WELCOME } from '../consts/ConstsNavigation';
import WelcomeScreen from '../views/welcome/WelcomeScreen';

const Stack = createStackNavigator();

export const RootNavigation = () => {
    <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name={WELCOME} component={WelcomeScreen}/>    
            </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigation;