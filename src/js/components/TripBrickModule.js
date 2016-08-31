import React, { Component } from 'react';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import Favorite from 'grommet/components/icons/base/Favorite';

export default class TripBrickModule extends Component {
  render() {
    return (
        <Brick label={this.props.tripName} colorIndex="accent-1" type="medium" texture={this.props.picture} >
          <Box justify="between" direction="row">
            <Button icon={<Favorite />} onClick={true} label={this.props.likes} plain={true} />
          </Box>
        </Brick>
    );
  }
}
