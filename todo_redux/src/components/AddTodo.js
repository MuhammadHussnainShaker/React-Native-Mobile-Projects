import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [input1, setInput1] = useState('Hi');
  const dispatch = useDispatch();

  const onChangeInputHandler = input => setInput(input);

  const addTodoHandler = () => {
    if (input.length <= 0) {
      alert('Todo input is empty, please write some text.');
    } else {
      dispatch(addTodo({input}));
      setInput('');
    }
  };

  return (
    <View style={styles.addTodoContainer}>
      <Text style={styles.heading}>AddTodo</Text>
      <TextInput
        placeholder="Write your todo here"
        value={input}
        onChangeText={onChangeInputHandler}
        style={styles.input}
      />
      <Button mode="contained" onPress={addTodoHandler} style={styles.button}>
        Press me
      </Button>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  addTodoContainer: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#B0B0B0',
  },
  heading: {
    fontSize: 20,
  },
  input: {
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
});
