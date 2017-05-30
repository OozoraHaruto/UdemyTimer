import React from 'react';
import Nav from 'Nav';

var Main = (props) =>{
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="medium-10 large-8 small-centered columns">{props.children}</div>
      </div>
    </div>
  )
}

module.exports = Main;
