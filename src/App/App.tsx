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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setRobotGallery(data))
    .catch((e) => setError(e.message));

    setLoading(false);
  }, []);

    return (
      <div className={styles.app}>
        <ShoppingCart />
        {error && <div>Fail to load...</div>}
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className={styles.robotList}>
            {robotGallery.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
          </div> 
        )}     
      </div>
    );
  }

export default App;
