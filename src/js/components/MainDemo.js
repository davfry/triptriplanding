import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Search from 'grommet/components/Search';
import Anchor from 'grommet/components/Anchor';

import User from 'grommet/components/icons/base/User';
import Filter from 'grommet/components/icons/base/Filter';
import Map from 'grommet/components/icons/base/Map';

import MainTripBrick from './MainTripBrick';

export default class MainDemo extends Component {
  constructor () {
    super();

    this._onTileClick = this._onTileClick.bind(this);

    this.state = {
      tileClicker: false
    };
  }

  _onTileClick () {
    this.setState({tileClicker: true });
  // alert('hey you clicked me!');
  }

  render() {

    if (this.state.tileClicker) {
      alert('clicked a tile');
    }

    return (
      <Section>
        <Header justify="between">
          <Search inline={true} value="Tokyo, Japan" />
          <Menu direction="row" align="center">
            <Anchor icon={<Filter />} onClick={this._onTileClick}/>
            <Anchor icon={<Map />} />
            <Anchor icon={<User />} />
          </Menu>
        </Header>
        <Section pad="medium">
          <MainTripBrick />
        </Section>
        <Section pad="none" align="center">
          <Anchor>Load more...</Anchor>
        </Section>
      </Section>
    );
  }
}
