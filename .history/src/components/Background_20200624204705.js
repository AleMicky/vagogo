import React, { memo } from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
    return(
        <ImageBackground source={require("../../assets/imagen/fondo_background.jpg")}
                         imageStyle= {{opacity:0.7}}
                         resizeMode="cover"
                         style={styles.background}>

                {children}

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        backgroundColor: '#000000',
    },
    linearGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }
})

export default memo(Background);