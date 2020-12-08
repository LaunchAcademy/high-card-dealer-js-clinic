class Hand {
  constructor(arrayOfCards) {
    this.cards = arrayOfCards
  }

  totalValue() {
    let sum = 0
    this.cards.forEach((card) => {
      sum += card.value()
    })
    return sum
  }
}

export default Hand