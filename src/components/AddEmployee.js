// src/components/AddEmployee.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import './AddEmployee.css';

const AddEmployee = () => {
  // Redux hooks for dispatching actions
  const dispatch = useDispatch();

  // State hooks for form input values and success message
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [department, setDepartment] = useState('');
  const [experience, setExperience] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle adding a new employee
  const handleAddEmployee = async () => {
    // Validate name to contain only letters and single spaces
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!nameRegex.test(fullName)) {
      alert('Please enter a valid name containing only letters and a single space between words.');
      return;
    }
  
    // Create a new employee object
    const newEmployee = {
      id: new Date().getTime(),
      fullName,
      birthdate,
      department,
      experience,
    };

    // Dispatch the action to add the new employee
    dispatch(addEmployee(newEmployee));

    // Reset form input values
    setFullName('');
    setBirthdate('');
    setDepartment('');
    setExperience('');

    // Display success message
    setSuccessMessage('Employee added successfully');

    // Remove success message after a certain time 
    setTimeout(() => setSuccessMessage(''), 1000);
  };

  return (
    <div className="add-employee-container">
      {/* Form title */}
      <h2 className="add-employee-title">Add Employee</h2>
      
      {/* Input fields for employee details */}
      <label className="add-label">
        Full Name:
        <input
          type="text"
          className="add-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          pattern="[a-zA-Z\s]+"
          title="Please enter a valid name containing only letters and spaces."
        />
      </label>
      <label className="add-label">
        Birthdate:
        <input type="date" className="add-input" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </label>
      <label className="add-label">
        Department:
        <input type="text" className="add-input" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <label className="add-label">
        Experience (years):
        <input type="number" className="add-input" value={experience} onChange={(e) => setExperience(e.target.value)} />
      </label>
      <br />

      {/* Display success message if present */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <br />

      {/* Button for adding employee */}
      <button className="add-button" onClick={handleAddEmployee}>
        Add Employee
      </button>
    </div>
  );
};

export default AddEmployee;
