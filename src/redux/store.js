// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import employeesReducer from './employeesSlice'; 

// Configure the Redux store with the employees reducer
const store = configureStore({
  reducer: {
    employees: employeesReducer, 
  },
});

// Export the configured store
export default store;
