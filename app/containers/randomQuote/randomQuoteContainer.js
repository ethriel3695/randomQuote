import React from 'react';
import PropTypes from 'prop-types';
import { fetchRandomQuote } from '../../config/quoteAPI';
import RandomQuote from '../../components/randomQuote/randomQuote.js';

class RandomQuoteContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            repos: null,
            content: ''
        };
    }

    componentDidMount () {
        this.fetchRandomQuote();
    }
    
    randomValue = (minimumValue, maximumValue) => {
        return Math.floor(Math.random()*(maximumValue - minimumValue + 1) + minimumValue);
    }

    singleQuoteContent = (quotes, random) => {
        return quotes[random];
    }

    htmlParseQuoteContent = (quote) => {
        let html = quote.content;
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.innerText;
    }

    async fetchRandomQuote() {
        try {
            this.setState({
                repos: null
            });
            const quotes = await fetchRandomQuote();

            const random = this.randomValue(1, 24);

            const quote = this.singleQuoteContent(quotes, random);
            quote.content = this.htmlParseQuoteContent(quote);

            this.setState({
                repos: quote,
                content: quote.content
            })

        } catch (error) {
            console.log(`This is the error: ${error}`);
        }
    }
    render() {
        return (
            <div>
                {<RandomQuote quotes={this.state.repos} content={this.state.content} />}
                <button className="btn btn-primary">
                    <i className="fa fa-quote-right"
                        onClick={this.fetchRandomQuote}></i>Get Quote
                </button>
            </div>
        )
    }
}

export default RandomQuoteContainer;