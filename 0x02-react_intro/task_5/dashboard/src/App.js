import logo from './holberton-logo.jpg';
import './App.css';
import UserConnect from './components/auth'
import React from 'react';

import { getFooterCopy, getFullYear }  from './utils';
function App() {
  let footertext = getFooterCopy(true);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <UserConnect />
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {footertext}</p>
      </div>
    </div>

  );
}

export default App;
