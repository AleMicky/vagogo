import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles'
import Background from '../../components/Background';
const WelcomeScreen = () => {
    return (
        <Background>
            <View style={Styles.container}>
                <Text>Hola desde Welcome</Text>
            </View>
        </Background>

    );
}

export default WelcomeScreen;
