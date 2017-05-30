import React from 'react';
import Clock from 'Clock';

class Countdown extends React.Component{
  render(){
    return (
      <div className="">
        <Clock totalSeconds={129} />
      </div>
    )
  }
}

module.exports = Countdown;
