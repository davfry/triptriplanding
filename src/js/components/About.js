import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

export default class About extends Component {
  render () {
    return (
      <Article align="center" full={true}>
        <Section>
          <Heading tag="h3" strong={true} margin="none">
            Our Story
          </Heading>
          <Section pad="none">
          <p>
          The idea for TripTrip came from a personal problem. My wife and I were planning a trip to Japan and it was a pain. We were amassing a lot of different ideas of things to do from travel sites, blogs, Instagram feeds, and suggestions from friends and family but we didn't have a great way to organize everything. So we did what everyone does when they don't have a good way to organize data and turned to Google sheets. What bugged me though is that I spent all of this time and effort planning this trip, I go on the trip and no one else can use the work I did. <br/><br/>

          I was talking to my friend about it and he had the exact same problem but was using Excel instead of Sheets. Another friend we talked to was planning his trip to New York using Trello. <br/><br/>

          There was no platform that allowed us to plan our trips the way we wanted. There was no platform that allowed us to browse other people's itineraries to get inspiration. So we made TripTrip. Now we need your help to create itineraries and spread the word!
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
