import React, {Component} from 'react';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';

const RewardProgress = props => (
  <div className="reward-item__progress">
    <Line percent={props.percent} strokeWidth="6" trailWidth="6" strokeColor="#fcb415" />
  </div>
);


RewardProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default RewardProgress;
