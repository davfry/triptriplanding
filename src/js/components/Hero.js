import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';



export default class Hero extends Component {
  render() {
    return (
      <Section primary={true} >
        <Box size="auto" justify="center" align="center" pad="medium">
          <Image size="small" src="../../img/logo3.svg"/>
          <h2>TRIPTRIP</h2>
          <h3>Travel like you've always dreamed.</h3>
        </Box>
        <Tiles flush={true} size="large" justify="center" align="center">
          <Tile size="large" flush={true}>
            <Form pad="medium">
              <Box direction="row" pad={{between: 'small'}}>
                <input id="email" type="email" placeholder="scott@triptrip.io"/>
                <Button id="button" label="Sign up" primary={true} onClick={true} />
              </Box>
            </Form>
          </Tile>
        </Tiles>
      </Section>
    );
  }
}
