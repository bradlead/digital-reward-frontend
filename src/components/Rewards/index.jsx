import React, { Component } from 'react';
import axios from 'axios';

import Account from '../Account';
import Reward from '../Reward';
import './style.scss';

class Rewards extends Component {

  constructor() {
    super();
    this.state = {
      transaction: [],
    };
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:3000/transaction')
    .then((response) => {
      this.setState({ transaction: response.data });
      console.log('merchantID: ', this.state.transaction);
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <Account />
        <div className="rewards__container">
          <ul className="rewards__list">
            <Reward />
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
