import React from 'react';
import PropTypes from 'prop-types';

const TransactionCounter = props => (
  <div className="reward-item__counter">{props.noOfTransactions}/9</div>
);

TransactionCounter.propTypes = {
  noOfTransactions: PropTypes.number.isRequired,
};

export default TransactionCounter;
