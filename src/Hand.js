class Hand {
  constructor(cards) {
    this.cards = cards
  }

  value() {
    let totalValueOfHand = 0
    this.cards.forEach((card) => {
      totalValueOfHand += card.value()
    })
    return totalValueOfHand
  }

  printHand() {
    let formattedHandOutput = ""
    this.cards.forEach((card, index) => {
      if (index < this.cards.length - 1) {
        formattedHandOutput += `${card.rank}${card.suit}, `
      } else {
        formattedHandOutput += `${card.rank}${card.suit}`
      }
    })
    return formattedHandOutput
  }
  // printHand() {
  //   let handArray = []
  //   this.cards.forEach((card) => {
  //       handArray.push(`${card.rank}${card.suit}`)
  //   })
  //   return handArray.join(", ")
  // }
}

export default Hand
