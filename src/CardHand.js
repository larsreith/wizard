import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardHand.css';
import Card from './Card'

class CardHand extends Component {
  
  constructor(props) {
    super(props);
    this.onSelectHandler = this.onSelectHandler.bind(this);
    this.state = {}
  }
 
  onSelectHandler(cardId) {
    this.props.cardSelected(cardId);
  }

  _renderPlayer() {
    var cards = this.props.cards.map((card) =>
      <Card key={card.id} cardId={card.id} cardType={card.cardType} value={card.value} isValid={card.isValid} onSelect={this.onSelectHandler}/>
    );
    return cards;
  }

  _renderOpponent() {
    var cards = this.props.cards.map((card) =>
      <Card key={card.id} cardId={card.id} cardType={card.cardType} value={card.value} isValid={card.isValid} isUpsideDown={!this.props.isPlayer}/>
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
