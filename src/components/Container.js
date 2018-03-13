import React, { Component } from 'react';

import List from './List';

class Container extends Component {
  render() {
    const allData = this.props.info;

    return (
      <section>
        {allData.map(function(list) {
          return <List title={list.title} cards={list.cards} />
        })}
      </section>
    );
  }
}

export default Container;
