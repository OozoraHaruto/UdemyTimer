import React from 'react';
import {NavLink} from 'react-router-dom';
import queryString from 'query-string';

class Nav extends React.Component{
  onSearch = (e) =>{
    e.preventDefault();

    var location = this.search.value;

    if (location.length > 0){
      this.search.value = '';

      var encodedLocation = queryString.stringify({location: location});
      window.location.hash = '#/?' + encodedLocation
    }
  };

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Udemy Timer</li>
            <li><NavLink exact to="/">Timer</NavLink></li>
            <li><NavLink to="/about">Countdown</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li className="menu-text">Created by <a href="http://main.ozorataiyo.com" target="_blank">大空太陽</a></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = Nav;
