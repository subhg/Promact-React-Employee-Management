// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Home from './components/Home'; 
import Navigation from './components/Navigation';
import employeesReducer from './redux/employeesSlice';
import './App.css';

// Configure Redux store
const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation /> {/* Include Navigation component */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Set Home component as the default route */}
            <Route path="/list" element={<EmployeeList />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
