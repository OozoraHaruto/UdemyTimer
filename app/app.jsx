//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom' ;

//Compents
import Main from 'Main';

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
          {//Additional crap
          }
        </Main>
  </Router>,
  document.getElementById('app')
);
