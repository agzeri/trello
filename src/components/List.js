import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <section>
        <div className='list'>
          <header className='list__header'>
            <h3>Week 3</h3>
          </header>
          <footer>
            <a href='#'>Add a card...</a>
          </footer>
        </div>
      </section>
    );
  } 
}

export default List
