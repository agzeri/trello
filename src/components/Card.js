import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <article className='card'>
        <h4 className='card__title'>Day 1 – Monday</h4>
        <ul className='stats'>
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
    );
  }
}

export default Card;
