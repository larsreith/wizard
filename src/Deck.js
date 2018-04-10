import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Deck.css';
import Card from './Card'

class Deck extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 

      return (      
          <div className="Deck">
            <Card cardType={this.props.card.cardType} value={this.props.card.value} />
          </div>
      )
  }
}

Deck.propTypes = {
  };

  Deck.defaultProps = {
};

export default Deck;
