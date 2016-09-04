import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

export default class Contact extends Component {
  render () {
    return (
    <Section full={true} justify="center">
      <Heading tag="h3" align="center">
      Contact info
      </Heading>
    </Section>
  );
  }
}
