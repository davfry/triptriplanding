import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';

import SignUpConfirm from './SignUpConfirm';

import database from './../../data/database';

export default class SignUpLayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      signupConfirm: false,
      onSubmitHandle: 'this.onModalSubmit'
    };

    this.onModalChange = this.onModalChange.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.onSignupConfirmCancel = this.onSignupConfirmCancel.bind(this);
  }

  onModalChange(e) {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  }

  onModalSubmit(e) {
    const firebaseRef = database.ref('/modalsignups');
    firebaseRef.push({
      email: this.state.email,
      Timestamp: Date()
    }).then(() => {
      this.setState({
        signupConfirm: true
      });
    }, (err) => {
      alert("Uh oh! We couldn't save your email. If this problem persists please email hello@triptrip.io");
    });
    e.preventDefault();
  }

  onSignupConfirmCancel() {
    this.setState({ signupConfirm: false });
  }

  render() {
    let addSignUpConfirm;
    if (this.state.signupConfirm) {
      addSignUpConfirm = (
        <SignUpConfirm onClose={this.onSignupConfirmCancel} />
      );
    }
    return (
      <Layer align="center" closer={true} onClose={this.props.onClose} flush={true}>
        <Section justify="center" align="center" pad="large">
          <Headline size="small" align="center">
            We need help creating itineraries and building this community!
          </Headline>
          <p>Please sign up to show your support and get early access.</p>
          <Form
          pad="medium">
            <Box direction="row" pad={{between: 'large'}}>
                <input
                  className="input-outline"
                  name="email"
                  type="email"
                  placeholder="Email goes here"
                  onChange={this.onModalChange} />
              <Button
                label="Get Early Access"
                primary={true}
                type="submit"
                onClick={this.onModalSubmit} />
            </Box>
          </Form>
        </Section>
        {addSignUpConfirm}
      </Layer>
    );
  }
}

SignUpLayer.PropTypes = {
  onClose: PropTypes.func.isRequired
};
