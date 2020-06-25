import React, { memo } from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
    return(
        <ImageBackground>
                {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

})

export default memo(Background);