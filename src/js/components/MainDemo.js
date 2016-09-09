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
import SignUpLayer from './SignUpLayer';


export default class MainDemo extends Component {
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
      <Section>
        <Header justify="between">
          <Search inline={true} defaultValue={"Tokyo, Japan"} onDOMChange={this._onSignUpRequest} />
          <Menu direction="row" align="center">
            <Anchor icon={<Filter />} onClick={this._onSignUpRequest}/>
            <Anchor icon={<Map />} onClick={this._onSignUpRequest}/>
            <Anchor icon={<User />} onClick={this._onSignUpRequest}/>
          </Menu>
        </Header>
        <Section pad="medium">
          <MainTripBrick />
        </Section>
        <Section pad="none" align="center">
          <Anchor>Load more...</Anchor>
        </Section>
        {addSignUpLayer}
      </Section>
    );
  }
}
