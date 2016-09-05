import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Table from 'grommet/components/Table';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import Favorite from 'grommet/components/icons/base/Favorite';

export default class DemoLayer extends Component {
  render() {
    return (
      <Layer align="right" closer={true} onClose={this.props.onClose}>
        <Section size="medium" full="true" align="center">
          <Brick full={true} label="Trip Name" colorIndex="accent-1" type="wide" texture="https://s4.postimg.io/4g80ojegt/image.jpg" >
            <Box justify="between" direction="row">
              <Button icon={<Favorite colorIndex="critical"/>} onClick={true} label="56" plain={true} />
            </Box>
          </Brick>
        </Section>
        <Section>
          <Table selectable={true} >
            <thead>
              <tr>
                <th>
                  Day 1
                </th>
                <th>
                  Day 2
                </th>
                <th>
                  Day 3
                </th>
                <th>
                  Day 4
                </th>
                <th>
                  Day 5
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  first
                </td>
                <td>
                  note 1
                </td>
              </tr>
              <tr>
                <td>
                  second
                </td>
                <td>
                  note 2
                </td>
              </tr>
              <tr>
                <td>
                  third
                </td>
                <td>
                  note 3
                </td>
              </tr>
            </tbody>
          </Table>
        </Section>
      </Layer>
    );
  }
}

DemoLayer.PropTypes = {
  onClose: PropTypes.func.isRequired
};
