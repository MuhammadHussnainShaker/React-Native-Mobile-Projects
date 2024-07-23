import { View, Text, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Text>About Us Page</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default About