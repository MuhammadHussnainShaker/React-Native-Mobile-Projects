import {createSlice, nanoid} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [{id: 1, text: 'Hello world'}],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // generates a unique id for the todo item
        text: action.payload.input,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
