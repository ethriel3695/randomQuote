import React from 'react';
import PropTypes from 'prop-types';
import { quoteContainer, quoteContent, quoteAuthor } from './styles.css';

RandomQuote.propTypes = {
  quotes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default function RandomQuote ({ quotes, content }) {
  return (
    quotes !== null
      ? <div className={quoteContainer}>
        <div className={quoteContent}>
          {content}
        </div>
        <span className={quoteAuthor}>{`${String.fromCharCode(8210)}${quotes.title}`}</span>
      </div>
      : <div>
        {'The Quote API is not working currently.'}
      </div>
  );
}
