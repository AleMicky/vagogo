import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, StatusBar, YellowBox } from 'react-native'
import color from './src/utils/color'
import Form from './src/components/Form'

YellowBox.ignoreWarnings(['Picker has been extracted'])
export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.sefaArea}>
        <Text style={styles.titlulo}>Cotizador de Prestamos</Text>
          <Form/>
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Text>Botton</Text>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  sefaArea:{
    backgroundColor: color.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  titlulo:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15
  }
})