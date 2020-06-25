import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
        <Text>Formulario</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})