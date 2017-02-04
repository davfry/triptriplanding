import React, { Component } from 'react';

import Section from 'grommet/components/Section';

import Hero from './Hero';
import VideoDemo from './VideoDemo';
// import MainDemo from './MainDemo';
// import EndSignUp from './EndSignUp';

export default class Home extends Component {
  render () {
    return (
    <Section>
      <Hero />
      {/* <MainDemo /> */}
      {/* <EndSignUp /> */}
      <VideoDemo />
    </Section>
    );
  }
}
