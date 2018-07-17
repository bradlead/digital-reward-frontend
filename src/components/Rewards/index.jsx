import React, { Component } from 'react';
import axios from 'axios';

import Account from '../Account';
import Reward from '../Reward';
import './style.scss';

class Rewards extends Component {

  constructor() {
    super();
    this.state = {
      rewards: [],
    };
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:3000/transaction')
    .then((response) => {
      this.setState({ rewards: response.data });
      console.log('merchantID: ', this.state.rewards);
    })
    .catch(error => console.log(error))
  }
  render() {
    const {
        rewards,
      } = this.state;
    return (
      <div className="App">
        <Account />
        <div className="rewards__container">
        <ul className="rewards rewards__list">
        {
          rewards.map(reward => (
            <Reward
              key={reward._id}
              description={reward.description}
              logo={reward.merchant_logo}
              count={reward.count}
            />
          ))
        }
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
