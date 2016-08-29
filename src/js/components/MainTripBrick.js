import React, { Component } from 'react';

import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';

import Favorite from 'grommet/components/icons/base/Favorite';
import Edit from 'grommet/components/icons/base/Edit';

export default class MainTripBrick extends Component {
  render() {
    return (
      <Bricks fill={true} flush={true}>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
        <Brick label="food tour of tokyo | 3 days" colorIndex="accent-1" type="medium">
          <Box justify="between" direction="row">
            <Favorite onClick={true}/>
            <Edit onClick={true} align="end"/>
          </Box>
        </Brick>
      </Bricks>
    );
  }
}
