import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const data = fetch('http://localhost:5000/employees').then((resolve) => {
      console.log(resolve)
  }).catch(err => {
    
    console.log(err.message)
  })


  return (
    <div className="App">

    </div>
  );
}

export default App;
