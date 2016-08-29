import React, { Component, PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import SearchInput from 'grommet/components/SearchInput';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';


import User from 'grommet/components/icons/base/User';
import Filter from 'grommet/components/icons/base/Filter';
import Map from 'grommet/components/icons/base/Map';

import TripBrick from './TripBrick';


export default class DemoLayer extends Component {
  render() {
    return (
      <Layer align="right" closer={true} onClose={this.props.onClose}>
        <Header justify="between">
          <SearchInput id="demoSearch" inline={true} classname="flex" value="Tokyo, Japan" />
          <Menu direction="row" align="center">
            <Anchor icon={<Filter />} />
            <Anchor icon={<Map />} />
            <Anchor icon={<User />} />
          </Menu>
        </Header>
        <Section size="medium">
          <TripBrick />
        </Section>
      </Layer>
    );
  }
}

DemoLayer.PropTypes = {
  onClose: PropTypes.func.isRequired
};
