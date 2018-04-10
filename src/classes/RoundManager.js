class RoundMananger {
  constructor(deckManager, stackManager, players) {
      this.deckManager = deckManager;
      this.stackManager = stackManager;
      this.currentRound = 1;
      this.playerArray = players;
      this.currentPlayerIndex;
      this.currentTrumpCard;
      this.currentStack = [];
      this.currentStackCardType;
  }

  initRound() {
    this.deckManager.dealCards(this.playerArray, this.currentRound);
    this.currentTrumpCard = this.deckManager.getTrumpCard();
    this.stackManager.currentTrump = this.currentTrumpCard;
    this.stackManager.initNewStack(0);
  }

  playNextCard(cardId) {
    let result = this.stackManager.playCard(cardId);
    console.log("RoundManager.playNextCard: " + JSON.stringify(result));

    if(result.complete) {
      this.playerArray[result.winningPlayerIndex].stacks++;
      this.stackManager.initNewStack(result.winningPlayerIndex);
    }
  }

  getPlayerStacks(playerIndex) {
    return this.playerArray[playerIndex].stacks;
  }

  getPlayerStacksEstimated(playerIndex) {
    return 2;
  }
}

export default RoundMananger;