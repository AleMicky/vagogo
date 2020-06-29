import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH, TABS, TABSS } from '../consts/ConstsNavigation';
import TabsNavigation from './TabsNavigation';
import HostNavigation from './HostNavigation';
const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name={AUTH} component={AuthNavigation} />
                <Stack.Screen options={{headerShown: false}} name={TABS} component={TabsNavigation} />
                <Stack.Screen options={{headerShown: false}} name={TABSS} component={HostNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;