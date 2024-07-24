import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Drawer1 from '../screens/Drawer1'
import About from '../screens/About'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true, headerTitle: "Password Generator"}}>
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator