import {View, Text} from 'react-native';
import React from 'react';
import DrawerNavigator from '../navigation/DrawerNavigator';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigator />
    </View>
  );
};

export default Main;
