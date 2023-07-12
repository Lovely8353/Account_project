import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DashboardScreen from './Src/DashboardScreen'
import MyDrawer from './Src/navigation/drawerNav/MyDrawer'

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      {/* <Text>App</Text> */}
      {/* <DashboardScreen /> */}
      <MyDrawer />
    </View>
  )
}

const styles = StyleSheet.create({})