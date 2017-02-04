import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

export default class About extends Component {
  render () {
    return (
      <Article align="center" full={true} pad="large" texture="../../img/backgroundcloudsgrey.svg">
        <Section>
          <Heading tag="h3" strong={true} margin="none">
            Our Story
          </Heading>
          <Section pad="none">
          <p>
        It's simple really... there wasn't a platform out there that lets us plan vacations the way we wanted. We were using Excel and Google Sheets to put together itineraties. There is so much information about traveling floating around the internet, but no central repository that allowed you to see others' itineraries. <br /><br />
        People spend hours planning a vacation, they go on it, and then that information was dead to the world. So we made TripTrip. One place to plan your vacation and get inspiration from others' itineraries.
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
              Twitter: <a href="https://twitter.com/triptripio" target="_blank">@triptripio</a>
            </Paragraph>
          </Section>
        </Section>
      </Article>
    );
  }
}
