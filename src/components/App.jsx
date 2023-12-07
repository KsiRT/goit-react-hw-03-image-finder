import React, { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Gallery } from './Gallery/Gallery';
import { Wrapper } from './GlobalStyles';

export class App extends Component {
  render() {
    return (
      <Wrapper>
        <Filter />
        <Gallery />
      </Wrapper>
    );
  }
}
