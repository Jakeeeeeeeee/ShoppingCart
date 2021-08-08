import React, { useContext } from "react";
import styles from './Robot.module.scss';
import { appContext } from '../../Context/appState';
import { useAddToCart } from '../../Hooks/useAddToCart';

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot : React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const addToCart = useAddToCart(); 

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

export default Robot;
