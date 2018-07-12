import React from 'react';
import PropTypes from 'prop-types';

const TransactionCounter = props => (
  <div className="reward-item__counter">
    {props.total}
    /9
  </div>
);

TransactionCounter.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TransactionCounter;
