import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Table from 'grommet/components/Table';


export default class DemoLayer extends Component {
  render() {
    return (
      <Layer align="right" closer={true} onClose={this.props.onClose} flush={true}>
      <Section size="medium">
        <Hero size="layer" backgroundImage="https://s4.postimg.io/m8tkwevp9/image.jpg">
        </Hero>
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
