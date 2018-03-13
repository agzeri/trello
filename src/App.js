import React, { Component } from 'react';

import Container from './components/Container';
import data from './data/cards';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container info={data} />
    );
  }
}

export default App;
