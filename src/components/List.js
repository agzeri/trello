import React, { Component } from 'react';

import Card from './Card';

class List extends Component {
  render() {
    const cards = this.props.cards;

    return (
      <div className='list'>
        <header className='list__header'>
          <h3 className='list__title'>{this.props.title}</h3>
        </header>
        <div className='list__container'>
          {cards.map(function(card) {
            return <Card title={card.title} />
          })}
        </div>
        <footer>
          <a href='#' className='card__add'>Add a card...</a>
        </footer>
      </div>
    );
  } 
}

export default List
