import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import color from '../utils/color'

export default function Form() {
    return (
        <View style={styles.viewForm}> 
            <View style={styles.viewInput}>
                <TextInput 
                          placeholder='Cantidad a pedir'
                          keyboardType='number-pad'
                />
                <TextInput placeholder='Cantidad a pedir'/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:-90,
        width:'85%',
        paddingHorizontal:50,
        backgroundColor:color.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:'center'
    },
    viewInput:{
        flexDirection:'row',

    }
})