import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';


export default class Learn extends Component {
  render() {
    return (
      <Section align="center" pad={{vertical: 'none'}}>
        <Box direction="row">
          <Box size="small" margin={{horizontal: 'large'}} align="center">
            <Heading margin="small" tag="h2">Create</Heading>
            <Image className="learnimage" src="../../img/planwhite.svg"/>
            <Paragraph align="center" >Plan your dream vacations. Do it on your own or collaborate with friends.</Paragraph>
          </Box>
          <Box size="small" margin={{horizontal: 'large'}} align="center">
          <Heading margin="small" tag="h2">Explore</Heading>
            <Image className="learnimage" src="../../img/browsewhite.svg"/>
          <Paragraph align="center" >Browse thousands of itineraries built by travelers just like you.</Paragraph>
          </Box>
          <Box size="small" margin={{horizontal: 'large'}} align="center">
          <Heading margin="small" tag="h2">Book & Go</Heading>
            <Image className="learnimage" src="../../img/ticket-5.svg"/>
          <Paragraph align="center" >Book your trips in one click and travel like you've always dreamed.</Paragraph>
          </Box>
        </Box>
      </Section>
    );
  }
}
