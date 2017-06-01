import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component{
  // In the latest version react you can define the default props directly like this
  // but don't forget the static keyword (static works when the stage-0 plugin is installed)
  static defaultProps = {
    totalSeconds: 0
  }

  static propTypes = {
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
