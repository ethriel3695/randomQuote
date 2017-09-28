import React from 'react';
import PropTypes from 'prop-types';

let quotesArray = [];

export default function RandomQuote ({quotes, content}) {

    return (
        quotes !== null ? 
        <ul className='popular-list'>
            <li key={quotes.ID} className='popular-item'>
                <div className='poular-rank'>{quotes.title}</div>
                <ul className='space-list-items'>
                    <li>
                        {content}
                    </li>
                </ul>
            </li>
        </ul>
        :
        <ul>
        </ul>
    )
}