import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const cardTypeWizard = "wizard";
const cardTypeJester = "jester";
const cardTypeBlue   = "blue";
const cardTypeGreen  = "green";
const cardTypeYellow = "yellow";
const cardTypeRed    = "red";

class Card extends Component {
  
  constructor(props) {
    super(props);
    this.selectCardHandler = this.selectCardHandler.bind(this);

    this.state = {
        cssClass: "Card " + this.getCSSClassForCardType() + this.getCSSClassForValidPlay(),
        displayValue: this.getDisplayValue()
    }
  }

  getCSSClassForCardType() {
    //return "Card-red-2";

    switch (this.props.cardType) {
        case cardTypeBlue: return "Card-blue";
        case cardTypeRed: return "Card-red"; // + this.props.value;
        case cardTypeYellow: return "Card-yellow";
        case cardTypeGreen: return "Card-green";
        case cardTypeWizard: return "Card-wizard";
        case cardTypeJester: return "Card-jester";
        default: return "";
    }  
  }

  getCSSClassForValidPlay() {
    if(this.props.isValid) return " Card-valid-play";
    else return "";
  }
  
  getDisplayValue() {
    switch(this.props.cardType) {
      case cardTypeWizard: return "Z";
      case cardTypeJester: return "N";
      default: return this.props.value;
    }
  }

  _render() {
    return (
      <div className={this.state.cssClass} onClick={this.selectCardHandler}>
        {this.state.displayValue}
      </div>
    );
  }

  _renderUpsideDown() {
    return (
      <div className="Card Card-background">

      </div>
    )
  }
  
  render() { 
    if(this.props.isUpsideDown) return this._renderUpsideDown();
    else return this._render();
  }

  selectCardHandler(event) {
    if(this.props.isValid) this.props.onSelect(this.props.cardId);
  }
}

Card.propTypes = {
    cardType: PropTypes.oneOf([cardTypeWizard, cardTypeJester, cardTypeBlue, cardTypeGreen, cardTypeRed, cardTypeYellow]),
    cardId: PropTypes.number,
    isUpsideDown: PropTypes.bool,
    isValid: PropTypes.bool,
  };

Card.defaultProps = {
    isUpsideDown: false
};

export default Card;
