import React from 'react';
// import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow,
} from 'react-google-maps';
import './style.scss';

const GOOGLE_MAPS_DROP_MARKER_ANIMATION = 2;

const MAP_DEFAULT_ZOOM = 8;
const MAP_DEFAULT_CENTER_LATITUDE = 53.47693;
const MAP_DEFAULT_CENTER_LONGITUDE = -2.23913;

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

  const infoWindowContent = (
    <RRLink className="map-marker" to="/">
      <div className="map-marker__header">
        <img
          className="map-marker__image"
          src="https://mondo-logo-cache.appspot.com/twitter/nuffieldhealth/?size=large"
          alt="Nuffield Health Logo"
        />
        <div className="map-marker__info">
          <div className="map-marker__info__name">
            Nuffield Health
          </div>
        </div>
      </div>
    </RRLink>
  );

  return (
    <GoogleMap
      defaultZoom={MAP_DEFAULT_ZOOM}
      defaultCenter={{ lat: MAP_DEFAULT_CENTER_LATITUDE, lng: MAP_DEFAULT_CENTER_LONGITUDE }}
    >
      <Marker
        animation={GOOGLE_MAPS_DROP_MARKER_ANIMATION}
        position={{ lat: 53.4079883, lng: -2.22044 }}
      >
        <InfoWindow>
          <div>
            {infoWindowContent}
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
}));

export default MyMapComponent;
