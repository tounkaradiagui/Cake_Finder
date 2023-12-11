import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import { StatusBar } from 'expo-status-bar'
import GoogleMapView from '../components/Home/GoogleMapView'

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style={{color:"#078ECB"}}/>
      <Header/>
      <GoogleMapView/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding:10
    
  }
})