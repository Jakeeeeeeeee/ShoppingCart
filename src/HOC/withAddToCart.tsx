import React, { useContext } from 'react';
import { appSetStateContext } from '../Context/appState';
import { RobotProps } from '../App/Robot/RobotDiscount';

export const withAddToCart = (ChildrenComponent: React.ComponentType<RobotProps>) => {
  return (props) => {
    const setState = useContext(appSetStateContext);

    const addToCart = (id, name) => {
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

    return <ChildrenComponent {...props} addToCart={addToCart} />
  }
};
