import React, { Component } from 'react';

import Box from 'grommet/components/Box';

import TripDetailsModule from './TripDetailsModule';

export default class TripDetails extends Component {
  render() {
    var consoledetail = console.log(
      this.props.details
    );
    return (
      <Box direction="row">
        {this.props.details.map(tripDetails => <TripDetailsModule key={tripDetails.id} {...tripDetails} />)}
        {consoledetail}
      </Box>
    );
  }
}
