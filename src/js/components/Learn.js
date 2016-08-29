import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Table from 'grommet/components/Table';

export default class Learn extends Component {
  render() {
    return (
      <Tiles fill={true} flush={true} pad="large">
        <Tile align="center" colorIndex="accent-2">
          <Image src="../../img/mobile.gif"/>
        </Tile>
        <Tile colorIndex="critical" size="large">
          <Header><h3>My Tasks:</h3></Header>
          <Table>
            <tbody>
              {items}
            </tbody>
          </Table>
        </Tile>
      </Tiles>
    );
  }
}
