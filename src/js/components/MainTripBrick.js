import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import TripBrickModule from './TripBrickModule';

import trips from '../../data/trips.js';


export default class MainTripBrick extends Component {
  render() {
    return (
      <Tiles flush={false} fill={true} size="medium">
        {trips.map(tripData => <TripBrickModule key={tripData.id} {...tripData} />)}
      </Tiles>
    );
  }
}
