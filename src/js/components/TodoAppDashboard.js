import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Table from 'grommet/components/Table';
import Section from 'grommet/components/Section';


export default class TodoAppDashboard extends Component {
  render () {
    return (
      <Section primary={true} >
      <Tiles fill={true} flush={true} pad="large">
        <Tile>
          <img src="../../img/mobile.gif"/>
        </Tile>
        <Tile size="large" align="center" justify="center">
          <Header><h3>triptrip is the easiest way to create trip itineraries, browse thousands </h3></Header>
          <Table />
        </Tile>
      </Tiles>
      </Section>
    );
  }
};
