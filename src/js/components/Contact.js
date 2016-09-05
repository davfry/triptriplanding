import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

export default class Contact extends Component {
  render () {
    return (
    <Section full={true} justify="center">
      <Heading tag="h3" align="center">
      You can write us at <a href="mailto:hello@triptrip.io" target="_blank">hello@triptrip.io</a>. You can also find us on <a href="https://twitter.com/davfry" target="_blank">Twitter</a>, <a href="https://twitter.com/davfry" target="_blank">Instagram</a>
      </Heading>
    </Section>
  );
  }
}
