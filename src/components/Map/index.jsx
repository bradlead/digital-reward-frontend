import React from 'react';
import axios from 'axios';
import { Link as RRLink } from 'react-router-dom';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow,
} from 'react-google-maps';
import Loader from '../Loader';
import './style.scss';

const GOOGLE_MAPS_DROP_MARKER_ANIMATION = 2;

const MAP_DEFAULT_ZOOM = 11;
const MAP_DEFAULT_CENTER_LATITUDE = 53.47693;
const MAP_DEFAULT_CENTER_LONGITUDE = -2.23913;

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

  const {
    rewards,
  } = props;

  return (
    <GoogleMap
      defaultZoom={MAP_DEFAULT_ZOOM}
      defaultCenter={{ lat: MAP_DEFAULT_CENTER_LATITUDE, lng: MAP_DEFAULT_CENTER_LONGITUDE }}
    >
      {/* loop through rewards */}
      {rewards.map((data) => {

        const infoWindowContent = (
          <RRLink className="map-marker" to="/">
            <div className="map-marker__header">
              <img
                className="map-marker__image"
                src={data.merchant_logo}
                alt={`${data.merchant_name}'s logo`}
              />
            </div>
          </RRLink>
        );

        return (
          <Marker
            animation={GOOGLE_MAPS_DROP_MARKER_ANIMATION}
            key={data._id}
            position={{ lat: data.latitude, lng: data.longitude }}
          >
            <InfoWindow>
              <div>
                {infoWindowContent}
              </div>
            </InfoWindow>
          </Marker>
        );
      })}
    </GoogleMap>
  );
}));

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      reward: [{
        _id: '',
        merchant_name: '',
        merchant_logo: '',
        latitude: 0,
        longitude: 0,
      }],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/rewards')
      .then((response) => {
        this.setState({ reward: response.data });
        console.log('reward:', response);
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      reward,
    } = this.state;

    return (
      <div className="App">
        <div className="rewards__container">
          <MyMapComponent
            rewards={reward}
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<Loader />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    );
  }
}

export default Map;
