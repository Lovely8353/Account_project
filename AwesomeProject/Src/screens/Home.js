import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Text>Home</Text>
      <Button title='Open Drawer' onPress={()=>navigation.openDrawer()}/>
    </View>
  )
}

export default Home