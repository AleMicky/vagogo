import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView>
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
    backgroundColor:'red',
    height:200
  }
})