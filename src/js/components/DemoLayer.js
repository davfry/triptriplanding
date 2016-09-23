import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';

import TripDetails from './TripDetails';


export default class DemoLayer extends Component {
  render() {
    return (
      <Layer align="right" closer={true} onClose={this.props.onClose} flush={true}>
        <Section size="medium">
          <Hero size="layer" backgroundImage="https://s4.postimg.io/m8tkwevp9/image.jpg" />
        </Section>
        <Section pad="small">
          <TripDetails {...this.props} />
        </Section>
      </Layer>
    );
  }
}

DemoLayer.PropTypes = {
  onClose: PropTypes.func.isRequired
};
