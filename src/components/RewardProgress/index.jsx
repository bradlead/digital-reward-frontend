import React from 'react';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';

const transition = 'stroke-dashoffset 2.2s ease 0s, stroke 0.6s ease';
const strokeYellow = '#fcb415';
const strokeGreen = '#78b348';

const RewardProgress = props => {
  const { percent } = props;
  const hundredPercent = percent === 100;
  return (
    <div className="reward-item__progress">
      <Line percent={props.percent} strokeWidth="6" trailWidth="6" transition={transition} strokeColor={hundredPercent ? strokeGreen : strokeYellow} />
    </div>
  );
};

RewardProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default RewardProgress;
