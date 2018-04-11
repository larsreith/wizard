class DeckManager {
  constructor() {
      this.baseDeck = this._initDeck();
      this.currentDeck = null;
    }

  dealCards(playerArray, numberOfCards) {
    this.currentDeck = this._shuffle(this.baseDeck.slice());

    for (var p=0; p < playerArray.length; p++) {
      playerArray[p].cardHand.length = 0;

      for (var c=0; c < numberOfCards; c++) {
        playerArray[p].cardHand[c] = this.currentDeck.pop(); // While shift is more natural to human dealer, pop is just faster! 
      } 
    }
  }

  getTrumpCard() {
    if(this.currentDeck.length === 0) return null;
    return this.currentDeck[0];
  }
    
  _initDeck() {
    var deck = [];
    var id = 1;
    var i;

    // Create wizards and jesters
    for(i = 1; i <= 4; i++) {
      deck.push({id: id, cardType: "wizard", value: i});
      deck.push({id: id, cardType: "jester", value: i});
      id++;
    }
    
    // Create color cards
    for(i = 1; i <= 13; i++) {
      deck.push({id: id, cardType: "red",  value: i}); id++;
      deck.push({id: id, cardType: "blue",  value: i}); id++;
      deck.push({id: id, cardType: "green",  value: i}); id++;
      deck.push({id: id, cardType: "yellow",  value: i}); id++;
    }
    
    return deck;
  }

  //  Fisher-Yates Shuffle 
  _shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }
}

export default DeckManager;