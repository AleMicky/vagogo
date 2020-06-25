import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import color from '../utils/color'

export default function Form() {
    return (
        <View style={styles.viewForm}> 
            <View style={styles.viewInput}>
                <TextInput 
                          placeholder='Cantidad a pedir'
                          keyboardType='numeric'
                          style={styles.input}
                />
                <TextInput placeholder='Interes %'
                           keyboardType='numeric'
                           style={[styles.input,styles.inputPorcentaje]}                    
                />
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
    },
    input:{
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:color.PRIMARY_COLOR,
        borderRadius:5,
        width:'60%',
        marginLeft:5,
        marginRight:-5,
        marginBottom:10,
        color:'#000',
        paddingHorizontal:20
    },
    inputPorcentaje:{
        width:'40%',
        marginLeft:5
    }
})