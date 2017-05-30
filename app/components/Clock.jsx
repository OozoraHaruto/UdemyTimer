import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component{
  constructor(props){
    super(props);
    totalSeconds: 0
  }

  PropTypes = {
    totalSeconds: PropTypes.number
  }

  formatSeconds = (totalSeconds)  =>{
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;

    return `${minutes}:${seconds}`;
  }

  render(){
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    )
  }
}

module.exports = Clock;
