import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  handleSetCoundown = (seconds) =>{
    this.setState({
      count:seconds
    });
  }

  render(){
    var {count} = this.state;
    return (
      <div className="">
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCoundown} />
      </div>
    )
  }
}

module.exports = Countdown;
