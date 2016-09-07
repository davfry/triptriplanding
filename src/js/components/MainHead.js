import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';


import DemoLayer from './DemoLayer';

export default class MainHead extends Component {
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

    let addDemoLayer;
    if (this.state.demoLayer) {
      addDemoLayer = (
        <DemoLayer onClose={this._requestDemoLayerCancel} />
      );
    }

    return (
      <Header direction="row" justify="between" large={true}
        pad={{horizontal: 'medium'}} reverse={false} fixed={true}>
        <Title>
          <Anchor href="/">
            triptrip
          </Anchor>
        </Title>
        <Menu direction="row" align="center">
          <Anchor href="/about">
            About
          </Anchor>
          <Anchor href="/contact">
            Contact
          </Anchor>
          <Anchor onClick={this._requestDemoLayer}>
            Demo
          </Anchor>
        </Menu>
        {addDemoLayer}
      </Header>
    );
  }
}
