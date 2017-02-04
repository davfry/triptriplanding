import React, { Component } from 'react';

import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import SocialShare from 'grommet/components/SocialShare';
import MainHead from './components/MainHead';



export default class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <MainHead />
        {this.props.children}
        <Footer primary={true} appCentered={true} direction="row"
          align="center" pad="small" splash={true} justify="between" size="small">
          <Paragraph margin="none">
            © 2016 triptrip.io
          </Paragraph>
            <span className="FooterShare">
              <SocialShare type="twitter" link="https://triptrip.io" text="If you're planning a vacation or just like to travel, check this out... @triptripio " />
              <SocialShare type="facebook" link="https://triptrip.io" />
            </span>
          <Paragraph margin="none">
            email us at <a href="mailto:hello@triptrip.io">hello@triptrip.io</a>
          </Paragraph>
        </Footer>
      </App>
    );
  }
};
