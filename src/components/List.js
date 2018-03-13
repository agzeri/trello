import React, { Component } from 'react';

import Card from './Card';

class List extends Component {
  render() {
    return (
      <div className='list'>
        <header className='list__header'>
          <h3 className='list__title'>Week 3</h3>
        </header>
        <div className='list__container'>
          <Card />
          <Card />
        </div>
        <footer>
          <a href='#' className='card__add'>Add a card...</a>
        </footer>
      </div>
    );
  } 
}

export default List
