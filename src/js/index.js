import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';

import Hero from './components/Hero';
import MainHead from './components/MainHead';
import EndSignUp from './components/EndSignUp';
import MainDemo from './components/MainDemo';


class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <MainHead />
        <Hero />
        <MainDemo />
        <EndSignUp />
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

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);
