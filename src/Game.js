import Deck from './Deck.js'
import Hand from './Hand.js'

console.log(`GAME START\n`)

let deck = new Deck

console.log(`There are ${deck.cards.length} cards in the deck.\n`)

const playerOneHand = new Hand(deck.deal())
const playerTwoHand = new Hand(deck.deal())

console.log(`Player 1 was dealt ${playerOneHand.printHand()}`)
console.log(`Player 2 was dealt ${playerTwoHand.printHand()}\n`)

const playerOneHandValue = playerOneHand.value()
const playerTwoHandValue = playerTwoHand.value()

console.log(`player 1's hand value: ${playerOneHandValue}`)
console.log(`player 2's hand value: ${playerTwoHandValue}\n`)

if (playerOneHandValue > playerTwoHandValue) {
  console.log(`Player 1 wins the game!`)
} else if (playerTwoHandValue > playerOneHandValue) {
  console.log(`Player 2 wins the game!`)
} else {
  console.log(`It's a tie!`)
}