import React from 'react';
import check from '../../assets/check.gif';
import './style.scss';

const BigTick = () => (
  <div className="reward-item__bigtick-container">
    <img src={check} className="check-image" />
  </div>
);

export default BigTick;
