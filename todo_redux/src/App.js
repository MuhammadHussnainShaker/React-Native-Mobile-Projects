import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.subContainer}>
          <AddTodo />
          <Todos />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A8A8A',
  },
  contentContainer: {},
  subContainer: {
    padding: 16,
  },
});
