import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

export default class NotFound extends Component {
  render () {
    return (
    <Section full={true} justify="center">
      <Heading align="center">404</Heading>
      <Heading tag="h2" align="center">Page Not Found</Heading>
    </Section>
  );
  }
}
