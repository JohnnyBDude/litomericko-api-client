import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Litomericko-api-client
        </p>
            <Button>Bootstrap button</Button>
      </header>
    </div>
  );
}

export default App;
