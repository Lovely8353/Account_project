import { View,Text } from 'react-native';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './CustomDrawer'
import Home from '../../screens/Home';
import DashboardScreen from '../../DashboardScreen';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
    
      }}
      screenOptions={{
        headerShown:false
      }}
      // Here we are setting our custom sidebar menu 
      drawerContent={(props) => <CustomDrawer {...props} />}
      >
        {/* <Drawer.Screen name="Home" component={Home} /> */}
        <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}




// export default function MyDrawer() {
//   return (
//     <View>
//       <Text>MyDroooawer</Text>
//     </View>
//   )
// }
