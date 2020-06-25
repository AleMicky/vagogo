import React from 'react';
import { View, Text } from 'react-native';
import  Styles from './Styles'
const WelcomeScreen = () => {
    return (
        <View style={Styles.container}>
            <Text>Hola desde Welcome</Text>
        </View>
    );
}

export default WelcomeScreen;
