class StackManager {
  constructor(players) {
    this.players = players,
    this.currentStackStartPlayerIndex = null,
    this.currentPlayerIndex = null,
    this.currentStack = [],
    this.currentStackAttentiveCardType = null,
    this.currentTrump = null
}

  validatePlayableCards(cardHand) {
    let containsAttentiveCardType = false;
    let i;

    if(this.currentStackAttentiveCardType != null) {
      for (i=0; i < cardHand.length; i++) {
        if(cardHand[i].cardType === this.currentStackAttentiveCardType) containsAttentiveCardType = true;
      }
    }

    let card;
    for (i=0; i < cardHand.length; i++) {
      card = cardHand[i];
      console.log("card: " + card.cardType + " " + card.value);
      console.log("trump: " + this.currentTrump.cardType + " " + this.currentTrump.value);
      if(
        card.cardType === "wizard" ||
        card.cardType === "jester" ||
        card.cardType === this.currentStackAttentiveCardType ||
        !containsAttentiveCardType
      ) {
        card.isValid = true;       
      } else {
        card.isValid = false;
      }
    }

    console.log("CardHand: " + JSON.stringify(cardHand));
    return cardHand;
  }

  validatePlayableCardsAllPlayers() {
    for (var i = 0; i < this.players.length; i++) {
      console.log("StackMananger: Player:  " + this.players[i]);
      this.validatePlayableCards(this.players[i].cardHand);
    }
  }

  initNewStack(startPlayerIndex) {
    this.currentStack.length = 0; 
    this.currentStackAttentiveCardType = null;
    this.currentPlayerIndex = this.currentStackStartPlayerIndex = startPlayerIndex;
    this.validatePlayableCardsAllPlayers();
  }

  /*
   * Returns true if stack remains open and more players need to play their card.
   */
  playCard(cardId) {
    let currentPlayer = this.getCurrentPlayer();
    let currentPlayerCardHand = currentPlayer.cardHand;
    let cardIndex = currentPlayerCardHand.findIndex(function(card) {
      console.log("Card Id to find: " + cardId + "; Card Id is: " + card.id);
      return card.id === cardId;
    })

    if(cardIndex == -1) {
      console.warn("Card Id should be valid. Cannot find card by id for current player. Abort");
      return {
        complete: false
      };;
    }

    let card = currentPlayerCardHand[cardIndex];
    // 
    if(this.currentStackAttentiveCardType == null) {
      if(card.cardType === "red" || card.cardType === "blue" || card.cardType === "yellow" || card.cardType === "green") {
        this.currentStackAttentiveCardType = card.cardType;
      }
    }

    // Add card to stack and remove from hand
    this.currentStack.push(currentPlayerCardHand[cardIndex]);
    currentPlayerCardHand.splice(cardIndex,1);

    this.currentPlayerIndex++;
    if(this.currentPlayerIndex >= this.players.length) {
      this.currentPlayerIndex = 0;
    }

    if(this.currentStack.length >= this.players.length) {
      console.log("stacks done");
      let winningCardIndex = this._validateStackWinner();
      let winningPlayerIndex = (this.currentStackStartPlayerIndex + winningCardIndex) % this.players.length;

      return {
        complete: true,
        winningCardIndex: winningCardIndex,
        winningPlayerIndex: winningPlayerIndex
      };
    }
    
    console.log("stacks open");
    this.validatePlayableCardsAllPlayers();

    return {
      complete: false
    };
  }

  _validateStackWinner() {
    if(this.currentStack.length < this.players.length) return -1;

    let trumpHighestIndex = -1;
    let trumpHighestValue= -1;
    let offColorHighestIndex = -1;
    let offColorHighestValue = -1;

    let card;
    for(let i=0; i<this.currentStack.length; i++) {
      card = this.currentStack[i];

      if(card.cardType === "wizard") {
        return i;
      }

      if(card.cardType === "jester") {
        continue;
      }

      if(card.cardType === this.currentTrump) {
        if(card.value > trumpHighestValue) {
          trumpHighestIndex = i;
          trumpHighestValue = card.value;        
        }
        continue;
      }

      if(card.cardType === this.currentStackAttentiveCardType) {
        if(card.value > offColorHighestValue) {
          offColorHighestIndex = i;
          offColorHighestValue = card.value;
        }
      }
    }

    if(trumpHighestIndex > -1) return trumpHighestIndex;
    if(offColorHighestIndex > -1) return offColorHighestIndex;

    // Last case is the very are occurrence of 4 jesters. In this case, first jester "wins" the stack
    return 0;
  }

  isActivePlayer(index) {
    if(index === this.currentPlayerIndex) return true;
    else return false;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  getCardHandForPlayer(playerIndex) {
    return this.players[playerIndex].cardHand;
  }

}

export default StackManager;