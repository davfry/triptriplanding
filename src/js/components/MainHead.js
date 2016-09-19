import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';

import SignUpLayer from './SignUpLayer';

export default class MainHead extends Component {
  constructor () {
    super();

    this._onSignUpRequest = this._onSignUpRequest.bind(this);
    this._onSignUpRequestCancel = this._onSignUpRequestCancel.bind(this);

    this.state = {
      signupLayer: false
    };
  }

  _onSignUpRequest () {
    this.setState({signupLayer: true });
  }
  _onSignUpRequestCancel () {
    this.setState({signupLayer: false });
  }

  render() {
    let addSignUpLayer;
    if (this.state.signupLayer) {
      addSignUpLayer = (
      <SignUpLayer onClose={this._onSignUpRequestCancel} />
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
          <Anchor onClick={this._onSignUpRequest} primary={true}>
            Sign Up
          </Anchor>
          {/* <Anchor href="/contact">
            Contact
          </Anchor> */}
        </Menu>
        {addSignUpLayer}
      </Header>
    );
  }
}
