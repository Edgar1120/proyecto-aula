// Layout.jsx
import React from 'react';
import Menu from '../menu/Menu'; 

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Menu />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
