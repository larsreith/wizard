import React, {Component} from 'react';
import './PlayerDisplay.css';

class PlayerDisplay extends Component {

  _getCSS() {
    if(this.props.isActive) {
      return "PlayerDisplay isActive";
    } else {
      return "PlayerDisplay";
    }
  }

  render() {
    return (
      <div className={this._getCSS()}>{this.props.name}: {this.props.stacks}/{this.props.stacksEstimated}</div>
    )
  }
}

export default PlayerDisplay;