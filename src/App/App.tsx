import React from 'react';
import './App.css';
import Robot from './Robot/Robot';
import robots from '../mockdata/robots.json';

function App() {
  return (
    <ul>      
      {robots.map((r => <Robot id={r.id} email={r.email} name={r.name} />))}
    </ul>
  );
}

export default App;