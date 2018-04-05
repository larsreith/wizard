import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardHand.css';
import Card from './Card'

class CardHand extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  isValidPlay(cardType) {
      if (cardType === "wizard") return true;
      if (cardType === "jester") return true;
      if (this.props.cardType === null) return true;
      if (cardType === this.props.trump) return true;
      return false;
  }
  
  _renderPlayer() {
    var cards = this.props.cards.map((card) =>
      <Card cardType={card.cardType} value={card.value} isValidPlay={this.isValidPlay(card.cardType)}/>
    );
    return cards;
  }

  _renderOpponent() {
    var cards = this.props.cards.map((card) =>
      <Card cardType={card.cardType} value={card.value} isValidPlay={this.isValidPlay(card.cardType)} isUpsideDown={!this.props.isPlayer}/>
    );
    return cards;
  }

  render() { 
    const cards = this.props.isPlayer ? this._renderPlayer() : this._renderOpponent();

      return (      
          <div className="CardHand">
            {cards}
          </div>
      )
  }
}

CardHand.propTypes = {
  };

CardHand.defaultProps = {
  isPlayer: true
};

export default CardHand;
