import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Hero from 'grommet/components/Hero';

import TripDetails from './TripDetails';


export default class DemoLayer extends Component {
  render() {
    return (
      <Layer align="right" closer={true} onClose={this.props.onClose} flush={false}>
        <Header size="small" pad="small">
          {this.props.tripName}
        </Header>
        <Section size="large">
          <Hero size="layer" backgroundType="image" backgroundImage={this.props.picture} />
            <TripDetails {...this.props} />
        </Section>
      </Layer>
    );
  }
}

DemoLayer.PropTypes = {
  onClose: PropTypes.func.isRequired
};
