import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

export default class About extends Component {
  render () {
    return (
      <Article align="center">
        <Section>
          <Heading tag="h3" strong={true} margin="none">
            Our Story
          </Heading>
          <Section pad="none">
          <p>
          It's really hard to get things done with the people around us, and to stay on track with what we need to get done in our own life. <br></br><br></br>

          But, getting things done with the people around us is at the foundation of what we do everyday. And while we can't get away from it, we can change how we interact with it. We can make your life easier. <br></br><br></br>

          When making WeDo, we realized people kept sending us tasks via texts and emails. And one day it dawned on us: rather than forcing people to use another app just to communicate with people about a project, why not just move our conversations about this project into the app? <br></br><br></br>
          </p>
          </Section>
          <Heading tag="h5" strong={true} margin="none">
            Contact
          </Heading>
          <Section pad="none">
            <Paragraph margin="none">
              Email: <a href="mailto:hello@triptrip.io" target="_blank">hello@triptrip.io</a>
            </Paragraph>
            <Paragraph margin="none">
              Twitter: <a href="www.twitter.com" target="_blank">@triptripio</a>
            </Paragraph>
          </Section>
        </Section>
      </Article>
  );
  }
}
