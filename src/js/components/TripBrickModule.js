import React, { Component } from 'react';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';

import Favorite from 'grommet/components/icons/base/Favorite';
import Edit from 'grommet/components/icons/base/Edit';

export default class TripBrickModule extends Component {
  render() {
    return (
        <Brick label={this.props.tripName} colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
    );
  }
}
