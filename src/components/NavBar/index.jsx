import React from 'react';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TokenManager from '../../utils/token-manager';

import './style.scss';

class NavBar extends React.Component {
  logout() {
    TokenManager.removeToken();
    window.location.href = '/login';
  }

  render() {
    return (
      <nav className="monzo-nav-container">
        <div className="monzo-nav">
          <Logo />
          <div>
            <NavLink className="nav-link" exact to="/">
              My Rewards
            </NavLink>
            <NavLink className="nav-link" exact to="/Map">
              Map
            </NavLink>
            <button className="monzo-button" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
