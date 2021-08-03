import { useContext } from 'react';
import { appSetStateContext } from '../../Context/appState';

export const useAddToCart = () => {
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
  }

  return addToCart;
}
