import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../features/post/postSlice';

const reducer = {
  post: postReducer
};

export const store = configureStore({ reducer });
