import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';


export default class Learn extends Component {
  render() {
    return (
      <Section  align="center">
        <Box direction="row">
          <Box size="small" margin={{horizontal: 'large'}} align="center">
            <h3>Plan</h3>
            <Image src="../../img/plan.svg"/>
            <p>Plan your dream vacations with our drag & drop itinerary builder.</p>
          </Box>
          <Box size="small" margin={{horizontal: 'large'}} align="center">
          <h3>Explore</h3>
            <Image src="../../img/explore.svg"/>
          <p>Browse thousands of itineraries built by travelers just like you.</p>
          </Box>
          <Box size="small" margin={{horizontal: 'large'}} align="center">
          <h3>Book & Go!</h3>
            <Image src="../../img/bookgo.svg"/>
          <p>Book your trips in one click and travel like you've always dreamed.</p>
          </Box>
        </Box>
      </Section>
    );
  }
}
