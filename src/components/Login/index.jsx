import React from 'react';
import Logo from '../Logo';
import './style.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="mzw-login">
        <div className="mzw-login__info">
          <Logo large />
        </div>
        <div className="mzw-login__form">
          <h1>Log in</h1>
          <h2>
            Start earning Rewards
          </h2>
          <a className="monzo-button" href={`https://auth.monzo.com/?client_id=${process.env.MONZO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&response_type=code`}>
            Authorize with Monzo
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
