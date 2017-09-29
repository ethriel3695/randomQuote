import React from 'react';
import PropTypes from 'prop-types';
import { quoteContainer, quoteContent, quoteAuthor } from './styles.css';

let quotesArray = [];

export default function RandomQuote ({ quotes, content }) {
  return (
    quotes !== null
      ? <div className='quoteContainer'>
          <ul key={quotes.ID}>
            <li className='quoteContent'>
              {content}
            </li>
            <li className='quoteAuthor'>{quotes.title}</li>
          </ul>
        </div>
      : <ul>
        {'The Quote API is not working currently.'}
      </ul>
  );
}
