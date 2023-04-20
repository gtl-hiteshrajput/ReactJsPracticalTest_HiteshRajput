import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../features/post/postSlice';
import counterReducer from '../features/counter/counterSlice';

const reducer = {
  counter: counterReducer,
  post: postReducer
};

export const store = configureStore({ reducer });
