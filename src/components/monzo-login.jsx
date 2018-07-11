import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class MonzoLogin extends React.Component {
  componentDidMount() {
    const code = this.props.location.search.match(/code=([^&]+)/)[1];
    axios.post('http://127.0.0.1:3000/auth/monzo', { code })
      .then((response) => {
        TokenManager.setToken(response.data.token);
        this.props.onLogin();
        this.props.history.push('/');
      })
      .catch((error) => {
        this.props.history.push('/');
      });
  }
  render() {
    return <p>Monzo API app</p>;
  }
}

MonzoLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default MonzoLogin;
