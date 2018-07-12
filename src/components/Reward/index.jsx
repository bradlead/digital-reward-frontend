import React, { Component } from 'react';
import axios from "axios";
import MerchantLogo from '../MerchantLogo';
import RewardDescription from '../RewardDescription';
import RewardProgress from '../RewardProgress';
import TransactionCounter from '../TransactionCounter';
import './style.scss';

class Reward extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.setState({ total: 8 });
  }

  render() {
    return (
      <div className="rewards">
        <li className="reward-item">
          <MerchantLogo />
          <div className="nested-items">
            <RewardDescription description="Reward Description" />
            <RewardProgress percent={Math.round(this.state.total * 100) / 9} />
          </div>
          <TransactionCounter total={9} />
        </li>
        <li className="reward-item">
          <MerchantLogo />
          <div className="nested-items">
            <RewardDescription description="Reward Description blah blah get a free coffee" />
            <RewardProgress percent={this.state.total} />
          </div>
          <TransactionCounter total={3} />
        </li>
      </div>
    );
  }
}

export default Reward;
