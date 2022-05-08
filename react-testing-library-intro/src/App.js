import React from 'react';
import Login from './components/login/Login';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React-testing-library</h1>
      <h2 data-testid="mytestid">Watch this</h2>
      <span title="time">when you can</span>
      <Login/>
    </div>
  );
}

export default App;
