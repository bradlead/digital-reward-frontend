import React from 'react';
import PropTypes from 'prop-types';

const TransactionCounter = props => (
  <div className="reward-item__counter">
    {props.count}
    /9
  </div>
);

TransactionCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default TransactionCounter;
