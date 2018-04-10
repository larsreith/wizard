class Player {
  constructor(index, name, cardHand=[]) {
    this.index = index,
    this.name = name;
    this.cardHand = cardHand
    this.stacks = 0;
    this.stacksEstimated = 0;
  }

  toString() {
    return "Class Player: \n" + 
      "index: " + this.index + "\n"+
      "name: " + this.name +  "\n"+
      "cardHand: " + JSON.stringify(this.cardHand);
  }
}

export default Player;