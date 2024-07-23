import {View, Text, Button} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

export default function GeneratePassword () {
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Text>Generate Password Page</Text>
      <Button
        title="Go To Password Generator"
        onPress={() => navigation.navigate('GeneratePassword')}
      />
      <Button title="About Us" onPress={() => navigation.navigate('About')} />
    </View>
  );
};