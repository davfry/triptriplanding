import React, { Component } from 'react';

import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import MainHead from './components/MainHead';


export default class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <MainHead />
        {this.props.children}
        <Footer primary={true} appCentered={true} direction="row"
          align="center" pad="small" justify="between">
          <p>
            © 2016 triptrip.io
          </p>
          <p>
            email us at <a href="mailto:hello@triptrip.io">hello@triptrip.io</a>
          </p>
        </Footer>
      </App>
    );
  }
};
