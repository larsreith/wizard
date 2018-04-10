import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CardHand from './CardHand';
import PlayerDisplay from './PlayerDisplay';
import Deck from './Deck';
import Stack from './Stack';
import DeckManager from './classes/DeckManager';
import RoundMananger from './classes/RoundManager';
import StackManager from './classes/StackManager';
import Player from './classes/Player';


class Board extends Component {
  
  constructor(props) {
    super(props);

    let players = [new Player(0,"Lars",),new Player(1, "AI"), new Player(2, "AI2"), new Player(3, "AI3")];

    this.deckManager = new DeckManager();
    this.stackManager = new StackManager(players);
    this.roundManager = new RoundMananger(this.deckManager, this.stackManager, players);
    this.playCardHandler = this.playCardHandler.bind(this);

    this.state = {
      players: players,
      stack: this.stackManager.currentStack
    }

    this.roundManager.currentRound = 5;
    this.roundManager.initRound();

  }

  playCardHandler(cardId) {
    this.roundManager.playNextCard(cardId);
    this.setState({stack: this.stackManager.currentStack});
  }

  render() { 
    return (
      <div className="Board">
        <div className="CardHandBottom">
          <CardHand isPlayer={true} cards={this.roundManager.playerArray[0].cardHand} cardSelected={this.playCardHandler} />
          <div className="BoardPlayerDisplay" >
            <PlayerDisplay isActive={this.stackManager.isActivePlayer(0)} name={this.state.players[0].name} stacks={this.roundManager.getPlayerStacks(0)} stacksEstimated={this.roundManager.getPlayerStacksEstimated(0)} />
          </div>
        </div>
        <div className="CardHandLeft">
          <CardHand isPlayer={true} cards={this.roundManager.playerArray[1].cardHand} cardSelected={this.playCardHandler} />
          <div className="BoardPlayerDisplay" >
            <PlayerDisplay isActive={this.stackManager.isActivePlayer(1)} name={this.state.players[1].name} stacks={this.roundManager.getPlayerStacks(1)} stacksEstimated={this.roundManager.getPlayerStacksEstimated(1)} />
          </div>
        </div>        
        <div className="CardHandTop">
          <CardHand isPlayer={true} cards={this.roundManager.playerArray[2].cardHand} cardSelected={this.playCardHandler} />
          <div className="BoardPlayerDisplay" >
            <PlayerDisplay isActive={this.stackManager.isActivePlayer(2)} name={this.state.players[2].name} stacks={this.roundManager.getPlayerStacks(2)} stacksEstimated={this.roundManager.getPlayerStacksEstimated(2)} />
          </div>        
        </div>  
        <div className="CardHandRight">
          <CardHand isPlayer={true} cards={this.roundManager.playerArray[3].cardHand} cardSelected={this.playCardHandler} />
          <div className="BoardPlayerDisplay" >
            <PlayerDisplay isActive={this.stackManager.isActivePlayer(3)} name={this.state.players[3].name} stacks={this.roundManager.getPlayerStacks(3)} stacksEstimated={this.roundManager.getPlayerStacksEstimated(3)} />
          </div>        
        </div>        
        <div className="BoardDeck">
          <Deck card={this.roundManager.currentTrumpCard}/>
        </div>
        <div className="BoardStack">
          <Stack cards={this.state.stack} />
        </div>

        
      </div>
    )
  }
}

Board.propTypes = {
};

Board.defaultProps = {
};

export default Board;
