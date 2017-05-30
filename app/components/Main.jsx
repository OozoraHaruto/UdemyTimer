import React from 'react';
import Nav from 'Nav';

var Main = (props) =>{
  return (
    <div>
      <Nav />
      <div className="row">
        <p>Main.jsx Rendered</p>
        <div className="">{props.children}</div>
      </div>
    </div>
  )
}

module.exports = Main;
