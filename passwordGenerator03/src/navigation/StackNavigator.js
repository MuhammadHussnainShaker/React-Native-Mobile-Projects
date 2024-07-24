import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Main from '../screens/Main';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

// import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';

// // screens
// import GeneratePassword from './screens/GeneratePassword';
// import Home from './screens/Home';
// import About from './screens/About';

// const Stack = createStackNavigator();

// const Navigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{headerShown: true, headerBackTitleVisible: true}}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen
//         name="GeneratePassword"
//         component={GeneratePassword}
//         options={{headerTitle: () => null}}
//       />
//       <Stack.Screen
//         name="About"
//         component={About}
//         options={{headerTitle: () => null}}
//       />
//     </Stack.Navigator>
//   );
// };

// export default Navigator;
