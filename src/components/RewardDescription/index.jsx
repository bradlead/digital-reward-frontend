import React from 'react';
import PropTypes from 'prop-types';

const RewardDesc = props => (
  <div className="reward-item__desc">
    {props.description}
  </div>
);

RewardDesc.propTypes = {
  description: PropTypes.string.isRequired,
};

export default RewardDesc;
