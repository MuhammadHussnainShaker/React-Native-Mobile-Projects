import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Home from '../components/Home.svg';
import Menu from '../components/Menu.svg';

const Header = () => {
  return (
    <View style={styles.mainCont}>
      <Home />
      <Text style={styles.heading}>MESSAGES</Text>
      <Menu />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#FF7F27',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 4,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    right:12,
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
