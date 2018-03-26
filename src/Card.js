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
  
  displayValue;

  constructor(props) {
    super(props);
    this.state = {
        cssClass: "Card " + this.getCSSClassForCardType(),
        displayValue: this.getDisplayValue()
    }
  }

  getCSSClassForCardType() {
    switch (this.props.cardType) {
        case cardTypeBlue: return "Card-blue";
        case cardTypeRed: return "Card-red";
        case cardTypeYellow: return "Card-yellow";
        case cardTypeGreen: return "Card-green";
        case cardTypeWizard: return "Card-wizard";
        case cardTypeJester: return "Card-jester";
        default: return "";
    }  
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
      <div className={this.state.cssClass}>
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
}

Card.propTypes = {
    cardType: PropTypes.oneOf([cardTypeWizard, cardTypeJester, cardTypeBlue, cardTypeGreen, cardTypeRed, cardTypeYellow]),
    isUpsideDown: PropTypes.bool
  };

Card.defaultProps = {
    cardType: "Wizard",
    isUpsideDown: false
};

export default Card;
