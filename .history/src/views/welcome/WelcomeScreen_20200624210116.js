import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles'
import Background from '../../components/Background';
import Logo from '../../components/Logo';
const WelcomeScreen = () => {
    return (
        <Background>
             <View style={Styles.header}>
                <Logo />
            </View>
        </Background>

    );
}

export default WelcomeScreen;
