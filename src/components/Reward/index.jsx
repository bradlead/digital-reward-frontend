import React from 'react';
import MerchantLogo from '../MerchantLogo';
import RewardDescription from '../RewardDescription';
import RewardProgress from '../RewardProgress';
import TransactionCounter from '../TransactionCounter';
import BigTick from '../BigTick';
import './style.scss';

const REWARD_TARGET = 9;

const Reward = props => (
  <React.Fragment>
    <li className="reward-item">
      <MerchantLogo logo={props.logo} />
      <div className="nested-items">
        <RewardDescription description={props.description} />
        <RewardProgress percent={Math.round(props.count * 100) / REWARD_TARGET} />
      </div>
      {REWARD_TARGET === props.count ? <BigTick /> : <TransactionCounter count={props.count} />}
    </li>
  </React.Fragment>
);

export default Reward;
