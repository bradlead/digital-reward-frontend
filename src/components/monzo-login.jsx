import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import Loader from '../components/Loader';

class MonzoLogin extends React.Component {
  componentDidMount() {
    const code = this.props.location.search.match(/code=([^&]+)/)[1];
    axios.post('http://127.0.0.1:3000/auth/monzo', { code })
      .then((response) => {
        TokenManager.setToken(response.data.token);
        this.props.onLogin();
        this.props.history.push('/');
      })
      .catch(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }
}

MonzoLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default MonzoLogin;
