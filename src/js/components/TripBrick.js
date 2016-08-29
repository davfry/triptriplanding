import React, { Component } from 'react';

import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';

import Favorite from 'grommet/components/icons/base/Favorite';
import Edit from 'grommet/components/icons/base/Edit';

export default class TripBrick extends Component {
  render() {
    return (
      <Bricks numColumns={2} fill={true} flush={true}>
        <Brick label="food tour of tokyo | 3 days" colorIndex="brand" type="wide">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="brand" type="wide">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="brand" type="wide">
          <Box justify="between" direction="row">
            <Favorite colorIndex="critical" onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="brand" type="wide">
          <Box justify="between" direction="row">
            <Favorite colorIndex="critical" onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
      </Bricks>
    );
  }
}
