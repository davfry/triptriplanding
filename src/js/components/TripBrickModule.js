import React, { Component } from 'react';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';

import Favorite from 'grommet/components/icons/base/Favorite';

import DemoLayer from './DemoLayer';

export default class TripBrickModule extends Component {
  constructor () {
    super ();

    this._requestDemoLayer = this._requestDemoLayer.bind(this);
    this._requestDemoLayerCancel = this._requestDemoLayerCancel.bind(this);

    this.state = {
      demoLayer: false
    };

  }

  _requestDemoLayer () {
    this.setState({ demoLayer: true});
  }

  _requestDemoLayerCancel () {
    this.setState({ demoLayer: false});
  }

  render() {

    let addDemoLayer = function() {};
    if (this.state.demoLayer) {
      addDemoLayer = function(props, cancelFunc) {
        return <DemoLayer {...props} onClose={cancelFunc} />;
      };
    }
    return (
        <Tile texture={this.props.picture} colorIndex="neutral-1" onClick={this._requestDemoLayer}>
          <Header size="small">
            <Button icon={<Favorite colorIndex="accent-3"/>} onClick={function(event) {
              event.stopPropagation();
              alert('You clicked the button.');
            }
        }
        label={this.props.likes} plain={true}/>
          </Header>
          <Box pad="large"/>
          <Box pad="large"/>
          <Footer size="small" primary={false} direction="row" align="center" justify="between" pad={{horizontal: 'small'}}>
            <Heading tag="h5" strong={true} uppercase={true} >
              {this.props.tripName}
            </Heading>
            <Heading tag="h5" strong={true} uppercase={true} >
              {this.props.duration} days
            </Heading>
          </Footer>
          {addDemoLayer(this.props, this._requestDemoLayerCancel)}
        </Tile>
    );
  }
}
