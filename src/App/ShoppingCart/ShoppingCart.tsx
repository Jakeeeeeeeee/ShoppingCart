import React from "react";
import styles from './ShoppingCart.module.scss';
import { FiShoppingCart } from 'react-icons/fi';

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e) => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button 
          className={styles.button}
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>Shopping Cart</span>
        </button>
        {this.state.isOpen && (
          <div className={styles.cartDropDown}>
            <ul>
              <li>robot 1</li>
              <li>robot 2</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default ShoppingCart;
