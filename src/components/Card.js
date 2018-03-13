import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
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
    );
  }
}

export default Card;
