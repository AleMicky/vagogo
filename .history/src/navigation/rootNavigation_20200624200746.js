import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH } from '../consts/ConstsNavigation';

const Stack = createStackNavigator();

export const RootNavigation = () => {
    <NavigationContainer>
          <Stack.Navigator  headerMode='none'>
                 <Stack.Screen name={AUTH} component={AuthNavigation}/>
            </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigation;