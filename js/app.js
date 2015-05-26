import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import AboutHandler from './components/About.js';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">Home </Link>
        <Link to="about">About</Link>

        {/* this is the importTant part */}
        <RouteHandler/> 
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="about" path="/about" handler={AboutHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});