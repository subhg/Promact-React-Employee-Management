// src/components/Homepage.js
import React from 'react';
import AddEmployee from './AddEmployee';

const Home = () => {
  return (
    <div>
      {/* Heading to welcome users */}

      <h2>Welcome to Employee Management</h2>
      
      {/* Render the AddEmployee component for adding employees */}
      <AddEmployee />
    </div>
  );
};

export default Home;
