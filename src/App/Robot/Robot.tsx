import React, { useContext } from "react";
import styles from './Robot.module.css';
import { appContext } from '../../Context/appState';
import { withAddToCart } from '../../HOC/withAddToCart';

interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id, name) => void;
}

const Robot : React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext);

  return (
    <div className={styles.cardContainer}>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{value.userName}</p>
      <button onClick={() => addToCart(id, name)}>Add To Cart</button>
    </div>
  )
}

export default withAddToCart(Robot);
