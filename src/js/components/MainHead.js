import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';

export default class MainHead extends Component {
  render() {
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
          <Anchor href="/about" primary={true}>
            Sign Up
          </Anchor>
          {/* <Anchor href="/contact">
            Contact
          </Anchor> */}
        </Menu>
      </Header>
    );
  }
}
