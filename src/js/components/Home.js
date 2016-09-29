import React, { Component } from 'react';

import Section from 'grommet/components/Section';

import Hero from './Hero';
import MainDemo from './MainDemo';
import EndSignUp from './EndSignUp';
import Learn from './Learn';

export default class Home extends Component {
  render () {
    return (
    <Section>
      <Hero />
      <Learn />
      <MainDemo />
      <EndSignUp />
    </Section>
  );
  }
}
