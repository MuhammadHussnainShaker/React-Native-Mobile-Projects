import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Bottom1 from '../screens/Bottom1'
import Bottom2 from '../screens/Bottom2'
import Home from '../screens/GeneratePassword'

const Bottom = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
        <Bottom.Screen name='Bottom1' component={Bottom1} />
        <Bottom.Screen name='Bottom2' component={Bottom2} />
        <Bottom.Screen name='Home' component={Home} />
    </Bottom.Navigator>
  )
}

export default BottomNavigator