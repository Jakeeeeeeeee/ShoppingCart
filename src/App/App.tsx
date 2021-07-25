import React from 'react';
import Robot from './Robot/Robot';
import robots from '../mockdata/robots.json';
import styles from './App.module.css';
import ShoppingCart from './ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className={styles.app}>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>      
    </div>
  );
}

export default App;
