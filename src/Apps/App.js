import React from 'react';
import Navbar from './NavBar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div>
      <h1 className='mainHeader'>Robs Resume Website</h1>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
