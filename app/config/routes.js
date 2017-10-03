import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainContainer, HomeContainer, randomQuoteContainer } from 'containers';

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={MainContainer} />
      <Route exact={true} path ='/' component={HomeContainer} />
      <Route exact={true} path = '/randomQuote' component={randomQuoteContainer} />
      <Route path ='/error' component={HomeContainer} />
    </div>
  </BrowserRouter>
);

export default routes;
