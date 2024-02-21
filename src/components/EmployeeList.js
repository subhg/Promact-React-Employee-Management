// src/components/EmployeeList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../redux/employeesSlice';
import './EmployeeList.css';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle the deletion of an employee
  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
    setSuccessMessage('Employee details deleted successfully');

    // Remove success message after a certain time
    setTimeout(() => setSuccessMessage(''), 1000);
  };

  return (
    <div>
      <h2>Employee List</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <br/>
      <table className='scroll'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Department</th>
            <th>Experience (years)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.fullName}</td>
              <td>{employee.department}</td>
              <td>{employee.experience}</td>
              <td>
                <button className='edit-button' onClick={() => navigate(`/edit/${employee.id}`)}>Edit</button>
                <button className='delete-button' onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
