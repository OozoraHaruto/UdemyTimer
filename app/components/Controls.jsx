import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.Component{
  // In the latest version react you can define the default props directly like this
  // but don't forget the static keyword (static works when the stage-0 plugin is installed)
  static propTypes = {
    countdownStatus: PropTypes.string.isRequired
  }

  render(){
    var {countdownStatus} = this.props;

    var renderStartStopButton = () =>{
      if(countdownStatus === 'started'){
        return <button className="button secondary">Pause</button>
      }else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    }

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
}

module.exports = Controls;
