//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom' ;

//Compents
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

//extra codes if needed

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App CSS
require('style-loader!css-loader!applicationStyles');

//render
ReactDOM.render(
  <Router>
        <Main>
            <Route exact path="/" component={Timer} />
            <Route path="/countdown" component={Countdown} />
            <Route path="/timer" component={Timer} />
        </Main>
  </Router>,
  document.getElementById('app')
);
