import React, { useContext } from "react";
import styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../../Context/appState';

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);

  const addToCart = () => {
    if(setState) {
      setState((preState) => {
        return {
          ...preState,
          shoppingCart: {
            items: [...preState.shoppingCart.items, {id, name}]
          }
        }
      })
    }

  };

  return (
    <div className={styles.cardContainer}>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{value.userName}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Robot;
