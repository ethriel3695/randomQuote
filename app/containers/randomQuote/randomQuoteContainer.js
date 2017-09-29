import React from 'react';
// import PropTypes from 'prop-types';
import { fetchRandomQuote } from '../../config/quoteAPI';
import RandomQuote from '../../components/randomQuote/randomQuote.js';

let quotes = [];
let random = 0;
let quote = [];

class RandomQuoteContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      repos: null,
      content: '',
      author: '',
    };
  }

  componentDidMount () {
    this.fetchRandomQuote();
  }

  randomValue = (minimumValue, maximumValue) => {
    return Math.floor(Math.random() * (maximumValue - minimumValue + 1) + minimumValue);
  }

  singleQuoteContent = (quotes, random) => {
    return quotes[random];
  }

  htmlParseQuoteContent = (information) => {
    let html = information;
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  }

  async fetchRandomQuote () {
    try {
      quotes = await fetchRandomQuote();

      random = this.randomValue(1, 24);

      quote = this.singleQuoteContent(quotes, random);

      if (quote !== null && this.state.repos !== null) {
        if (quote.Id === this.state.repos.ID) {
          quotes = await fetchRandomQuote();
          quote = this.singleQuoteContent(quotes, random);
        }
      }

      quote.content = this.htmlParseQuoteContent(quote.content);

      quote.author = this.htmlParseQuoteContent(quote.author);

      this.setState({
        repos: quote,
        content: quote.content,
        author: quote.author,
      });
    } catch (error) {
      // console.log(`This is the error: ${error}`);
    }
  }

  updateQuote = () => {
    this.fetchRandomQuote();
  }

  render () {
    return (
      <div>
        {<RandomQuote quotes={this.state.repos} content={this.state.content} />}
        <button className='btn btn-primary'
          onClick={this.updateQuote}>{'Get Quote'}</button>
      </div>
    );
  }
}

export default RandomQuoteContainer;
