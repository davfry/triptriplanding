import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';


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
        pad={{horizontal: 'medium'}} reverse={true}>
          <Menu direction="row" align="center">
            <Anchor href="#">
              About
            </Anchor>
            <Anchor href="#">
              Contact
            </Anchor>
            <Anchor href="#" onClick={this._requestDemoLayer}>
              Demo
            </Anchor>
          </Menu>
          {addDemoLayer}
      </Header>
    );
  }
}
