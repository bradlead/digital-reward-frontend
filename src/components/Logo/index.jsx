import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import monzoLogo from '../../assets/indespendent.svg';
import './style.scss';

class Logo extends React.Component {
  render() {
    const { large } = this.props;

    const logoClassnames = classNames({
      'inde-logo': true,
      'inde-logo--large': large,
    });

    return (
      <div className={logoClassnames}>
        <img src={monzoLogo} alt="indespendent" className="inde-logo__image" />
      </div>
    );
  }
}

Logo.defaultProps = {
  large: false,
};

Logo.propTypes = {
  large: PropTypes.bool,
};

export default Logo;
