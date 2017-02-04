import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';

export default class NotFound extends Component {
  render () {
    return (
    <Section full={true} justify="center" align="center">
      <Image size="small" src="../../img/404.svg" />
      <Heading tag="h2" align="center">You're lost... page not found!</Heading>
    </Section>
    );
  }
}
