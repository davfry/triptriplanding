import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';


export default class SignUpLayer extends Component {
  render() {
    return (
      <Layer align="center" closer={true} onClose={this.props.onClose} flush={true}>
        <Section justify="center" align="center" pad="large">
          <Headline size="small" align="center">
            We need help creating itineraries and building this community!
          </Headline>
          <p>Please sign up to show your support and get early access. Don't worry, we'll treat your email address like we'd want ours to be treated.</p>
          <Form
          pad="medium"
          action="//morningperson.us9.list-manage.com/subscribe/post?u=02976f547bde7affaa3366531&amp;id=c44fa5d872"
          method="post"
          target="_blank"
          >
            <Box direction="row" pad={{between: 'large'}}>
              <FormField>
                <input id="email" type="email" placeholder="scott@triptrip.io"/>
              </FormField>
              <Button  label="Sign up" primary={true} type="submit" />
            </Box>
          </Form>
        </Section>
      </Layer>
    );
  }
}

SignUpLayer.PropTypes = {
  onClose: PropTypes.func.isRequired
};
