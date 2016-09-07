import React, { Component } from 'react';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';

import Favorite from 'grommet/components/icons/base/Favorite';

export default class TripBrickModule extends Component {
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
        <Tile texture={this.props.picture} colorIndex="neutral-1" onClick={this._onTileClick}>
          <Header>
            <Button icon={<Favorite colorIndex="accent-3"/>} onClick={true} label={this.props.likes} plain={true}/>
          </Header>
          <Box pad="large"/>
          <Box pad="large"/>
          <Footer size="small" primary={false} colorIndex="grey-5" direction="row" align="center" justify="between">
            <Heading tag="h5" strong={true} uppercase={true} >
              {this.props.tripName}
            </Heading>
            <Heading tag="h5" strong={true} uppercase={true} >
              {this.props.duration} days
            </Heading>
          </Footer>
        </Tile>
    );
  }
}
