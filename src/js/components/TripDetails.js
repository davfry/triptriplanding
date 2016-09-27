import React, { Component } from 'react';

import Box from 'grommet/components/Box';

export default class TripDetails extends Component {
  render() {
    return (
      <Box direction="column">
        <Box margin="small" pad="medium" align="center" justify="center" colorIndex="neutral-1">
          {this.props.details[0].hotel}
        </Box>
      </Box>
    );
  }
}
