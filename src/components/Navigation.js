// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-container">
      {/* Brand name on the left */}
      <div className="brand">Employee Management System</div>
      {/* Navigation links on the right */}
      <div className="nav-links">
        <Link to="/add">Add Employee</Link> 
        <Link to="/list">View Employee</Link> 
      </div>
    </div>
  );
};

export default Navigation;
