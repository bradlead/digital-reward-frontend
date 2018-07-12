import React, { Component } from 'react';
import Account from '../Account';
import Reward from '../Reward';
import './style.scss';

class Rewards extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
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
