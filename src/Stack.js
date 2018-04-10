import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Stack.css';
import Card from './Card'

class Stack extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  _renderEmptyStack() {
    return (
      <div className="StackEmpty" >
        <div className="Ring" />
      </div>
    )
  }

  _renderStack() {
    let topcard = this.props.cards[this.props.cards.length-1];

    return (      
      <div className="Stack">
        <Card key={topcard.id} cardId={topcard.id} cardType={topcard.cardType} value={topcard.value} />
      </div>
    )
  }

  render() { 
    if(this.props.cards.length === 0) return this._renderEmptyStack();
    let result = this._renderStack();

    return result;
  }
}

Stack.propTypes = {
  };

  Stack.defaultProps = {
};

export default Stack;
