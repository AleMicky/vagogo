import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import color from './src/utils/color'
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.sefaArea}>
        <Text>Formulario</Text>
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
  }
})