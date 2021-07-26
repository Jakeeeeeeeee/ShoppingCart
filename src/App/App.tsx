import React, { useState, useEffect } from 'react';
import Robot from './Robot/Robot';
import robots from '../mockdata/robots.json';
import styles from './App.module.css';
import ShoppingCart from './ShoppingCart/ShoppingCart';


// interface Props {}

// interface State {
//   robotGallery: any
// }

const App: React.FC = () => {
  const [robotGallery, setRobotGallery] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setRobotGallery(data));
  }, []);

    return (
      <div className={styles.app}>
        <ShoppingCart />
        <div className={styles.robotList}>
          {robotGallery.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>      
      </div>
    );
  }

export default App;
