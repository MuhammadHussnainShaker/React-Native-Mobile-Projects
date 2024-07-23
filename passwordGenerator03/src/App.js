import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import GeneratePassword from './screens/GeneratePassword';
import Home from './screens/Home';
import About from './screens/About';

// drawer
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="GeneratePassword" component={GeneratePassword} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: true, headerBackTitleVisible: true}}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="GeneratePassword"
            component={GeneratePassword}
            options={{headerTitle: () => null}}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{headerTitle: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
