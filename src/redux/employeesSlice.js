// src/redux/employeesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice for managing employee data
const employeesSlice = createSlice({
  name: 'employees', 
  initialState: [], 
  reducers: {
    // Reducer to add a new employee to the state
    addEmployee: (state, action) => {
      state.push(action.payload); 
    },
    // Reducer to update an existing employee in the state
    updateEmployee: (state, action) => {
      const index = state.findIndex((emp) => emp.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload; 
      }
    },
    // Reducer to delete an employee from the state
    deleteEmployee: (state, action) => {
      // Return a new array without the deleted employee
      return state.filter((emp) => emp.id !== action.payload);
    },
  },
});

// Export the action creators
export const { addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;

// Export the reducer
export default employeesSlice.reducer;
