import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Video from 'grommet/components/Video';
import Heading from 'grommet/components/Heading';


export default class VideoDemo extends Component {
  render() {
    return (
      <span id="demo">
        <Section justify="center" align="center" texture="../../img/backgroundcloudssmall.svg">
          <Heading align="center" margin="small" tag="h2">
            Demo Video
          </Heading>
          <Video size="large" shareLink="triptrip.io/#demo" showControls={true} colorIndex="brand-color">
            <source src="../../img/triptripdemo.mov" />
          </Video>
        </Section>
      </span>
    );
  }
}
