import React from 'react';
import PropTypes from 'prop-types';
import { fetchRandomQuote } from '../../config/quoteAPI';

var randomValue = 0;

/*<ul className='popular-list'>
            {quotes.map((quote, index) => {
                return (
                    <li key={quote.id} className='popular-item'>
                        <div className='poular-rank'>#{quote.title}</div>
                        <ul className='space-list-items'>
                            <li>
                                {quote.content}
                            </li>
                        </ul>
                    </li>
                )
            })}
</ul>*/

function RepoGrid ({quotes, randomValue}) {
    console.log(quotes);

    return (
        <ul className='popular-list'>
            {quotes.map((quote, index) => {
                return (
                    <li key={quote.id} className='popular-item'>
                        <div className='poular-rank'>#{quote.title}</div>
                        <ul className='space-list-items'>
                            <li>
                                {quote.content}
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    //quotes: PropTypes.array.isRequired,
}

class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            repos: null
        };
    }

    componentWillMount () {
        randomValue = (minimumValue, maximumValue) => {
            return Math.floor(Math.random()*(maximumValue - minimumValue + 1) + minimumValue);
        }
    }

    componentDidMount () {
        this.fetchRandomQuote();
    }

    

    async fetchRandomQuote() {
        try {
            this.setState({
                repos: null
            });
            const quotes = await fetchRandomQuote()
                this.setState({
                    repos: quotes
                })
        } catch (error) {
            console.log(`This is the error: ${error}`);
        }
    }
    render() {
        return (
            <div>
                {<RepoGrid quotes={this.state.repos} randomValue={randomValue} />}
                {/*this.state.quotes*/}
            </div>
        )
    }
}

export default Popular;