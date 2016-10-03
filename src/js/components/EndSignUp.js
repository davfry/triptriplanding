import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';


export default class EndSignUp extends Component {
  render() {
    return (
      <Section justify="center" align="center" texture="../../img/backgroundcloudssmall.svg">
        <Headline size="small">
          Sign up to show your support + get early access!
        </Headline>
        <p>some copy that makes people sign up.</p>
        <Form pad="medium">
          <Box direction="row" pad={{between: 'large'}}>
            <FormField>
              <input id="email" type="email" placeholder="scott@triptrip.io"/>
            </FormField>
            <Button id="button" label="Sign up" primary={true} onClick={true}/>
          </Box>
        </Form>
      </Section>
    );
  }
}
