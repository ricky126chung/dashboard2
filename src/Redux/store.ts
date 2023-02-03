import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import siReducer from './slices/SISlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stockItem: siReducer
  },
});
