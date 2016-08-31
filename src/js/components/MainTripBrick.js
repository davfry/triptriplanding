import React, { Component } from 'react';

import Bricks from 'grommet/components/Bricks';
import TripBrickModule from './TripBrickModule';

import trips from '../../data/trips.js'


export default class MainTripBrick extends Component {
  render() {
    return (
      <Bricks fill={true} flush={true}>
        {trips.map(tripData => <TripBrickModule key={tripData.id} {...tripData} />)}
      </Bricks>
    );
  }
}
