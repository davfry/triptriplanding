import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Tags from 'grommet/components/Tags';
import Tag from 'grommet/components/Tag';

export default class TripDetails extends Component {
  render() {
    return (
      <Box pad="none" direction="row">
        <Box>
          <h3>Test</h3>
          <Tags direction="column" align="center">
            <Tag label="First" />
            <Tag label="Second" />
            <Tag label="Third" />
          </Tags>
        </Box>
        <Box>
          <h3>Test</h3>
          <Tags direction="column" align="center">
            <Tag label="First" />
            <Tag label="Second" />
            <Tag label="Third" />
            <Tag label="Fourth" />
            <Tag label="Fifth" />
          </Tags>
        </Box>
      </Box>
    );
  }
}
