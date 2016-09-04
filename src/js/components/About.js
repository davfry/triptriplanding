import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

export default class About extends Component {
  render () {
    return (
    <Section full={true} justify="center">
      <Heading tag="h3" align="center">
      triptrip is made in Salt Lake City by <a href="https://twitter.com/davfry" target="_blank">Dave Fryer</a> and <a href="https://twitter.com/davfry" target="_blank">Scott Wall</a>.
      </Heading>
    </Section>
  );
  }
}
