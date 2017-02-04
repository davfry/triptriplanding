import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import SocialShare from 'grommet/components/SocialShare';

export default class SignUpConfirm extends Component {
  render() {
    return (
      <Layer align="center" closer={true} onClose={this.props.onClose} flush={true}>
        <Section justify="center" align="center" pad="large">
          <Headline size="small" align="center">
            Success! Thanks for signing up!
          </Headline>
          <p>We're trying to build this community and need all the help we can get. Please help us spread the word!</p>
          <Box direction="row">
            <SocialShare type="twitter" link="https://triptrip.io" text="If you're planning a vacation or just like to travel, check this out... @triptripio " />
            <SocialShare type="facebook" link="https://triptrip.io" />
          </Box>
        </Section>
      </Layer>
    );
  }
}

SignUpConfirm.PropTypes = {
  onClose: PropTypes.func.isRequired
};
