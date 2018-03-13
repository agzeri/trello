import React, { Component } from 'react';

import Card from './Card';

class List extends Component {
  render() {
    return (
      <section>
        <div className='list'>
          <header className='list__header'>
            <h3>Week 3</h3>
          </header>
          <div className='list__container'>
            <Card />
          </div>
          <footer>
            <a href='#'>Add a card...</a>
          </footer>
        </div>
      </section>
    );
  } 
}

export default List
