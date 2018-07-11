import React, { Component } from 'react';
import axios from "axios";
// import Loader from '../Loader';
import Account from '../Account';
import MyMapComponent from '../Map';
import Reward from '../Reward';
import './style.scss';
import Loader from '../Loader';

class Rewards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      /* account: [{
      id: '',
      description: '',
      created: '',
      type: ''
      }] */
    };
  }

  render() {
    return (
      <div className="App">
        <Account />
        <div className="rewards__container">
          <MyMapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<Loader />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <ul className="rewards__list">
            <Reward />
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
