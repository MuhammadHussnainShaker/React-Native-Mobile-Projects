import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import {removeTodo} from '../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <View style={styles.todosContainer}>
      {todos.map(todo => (
        <View key={todo.id} style={styles.todoContainer}>
          <Text style={styles.heading}>{todo.text}</Text>
          <Button
            style={styles.deleteButton}
            mode='contained'
            onPress={() => dispatch(removeTodo(todo.id))}>
            X
          </Button>
        </View>
      ))}
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todosContainer: {
    marginTop: 12,
  },
  todoContainer: {
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#B0B0B0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
  },
  deleteButton: {
    fontSize: 30,
  },
});
