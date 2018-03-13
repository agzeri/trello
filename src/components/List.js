import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <section>
        <div className='list'>
          <header className='list__header'>
            <h3>Week 3</h3>
          </header>
          <div className='list__container'>
            <article>
              <h4>Day 1 – Monday</h4>
              <ul>
                <li>
                  <i className='fa fa-eye'></i>
                </li>
                <li>
                  <i className='fa fa-bars'></i>
                </li>
                <li>
                  <i className='fa fa-comment-o'></i> 6
                </li>
                <li>
                  <i className='fa fa-paperclip'></i> 2
                </li>
                <li>
                  <i className='fa fa-check-square-o'></i> 0/14
                </li>
              </ul>
            </article>
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
