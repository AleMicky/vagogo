import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH } from '../consts/ConstsNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
    <NavigationContainer>
            <Stack.Navigator>
                 <Stack.Screen name='root' component={AuthNavigation}/>
            </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigation;