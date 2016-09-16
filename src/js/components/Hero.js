import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';



export default class Hero extends Component {
  render() {
    return (
      <Section primary={true} texture="../../img/backgroundstars.svg">
        <Box size="auto" justify="center" align="center" pad="medium" >
          <Image size="xsmall" src="../../img/logo6.svg"/>
          {/* <Heading tag="h2">TRIPTRIP</Heading> */}
          <br />
          <Heading tag="h3">Travel like you've always dreamed.</Heading>
          <Heading tag="h4" strong={true} >The simplest way to create, share, and browse thousands of travel itineraries.</Heading>
            </Box>
            <Box pad="large" />
        <Tiles flush={true} size="large" justify="center" align="center">
          <Tile size="large" flush={true}>
            <Form pad="medium">
              <Box direction="row" pad={{between: 'small'}}>
                <input id="email" type="email" placeholder="scott@triptrip.io"/>
                <Button id="button" label="Sign up" primary={true} onClick={
                  function () {
                    alert('alert');
                  }
                } />
              </Box>
            </Form>
          </Tile>
        </Tiles>
      </Section>
    );
  }
}
