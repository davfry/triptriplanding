import React, { Component } from 'react';

import Box from 'grommet/components/Box';

export default class TripDetailsModule extends Component {
  render() {
    return (
        <Box flex={true} margin="small" pad="medium" align="center" justify="center" colorIndex="neutral-1">
        Day {this.props.day}
        </Box>
    );
  }
}
