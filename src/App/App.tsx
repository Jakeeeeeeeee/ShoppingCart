import React from 'react';
import Robot from './Robot/Robot';
import robots from '../mockdata/robots.json';
import styles from './App.module.css';
import ShoppingCart from './ShoppingCart/ShoppingCart';

interface Props {}

interface State {
  robotGallery: any
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
    return (
      <div className={styles.app}>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>      
      </div>
    );
  }
}

export default App;
