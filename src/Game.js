import Deck from './Deck.js'
import Card from './Card.js'
import Hand from './Hand.js'

// GAME START

// Your game logic here.
console.log("GAME START!")

const gameDeck = new Deck()

console.log(`There are ${gameDeck.cards.length} cards in the deck.`)

const player1 = new Hand(gameDeck.deal())
const player2 = new Hand(gameDeck.deal())


let player1Cards = []
player1.cards.forEach((card) => {
  player1Cards.push(`${card.rank}${card.suit}`)
})
player1Cards.join(', ')

let player1Message = `Player 1 was dealt ${player1Cards}`
console.log(player1Message)


let player2Cards = []
player2.cards.forEach((card) => {
  player2Cards.push(`${card.rank}${card.suit}`)
})
player2Cards.join(', ')

let player2Message = `Player 2 was dealt ${player2Cards}`
console.log(player2Message)

console.log(`Player 1's hand value: ${player1.totalValue()}`)
console.log(`Player 2's hand value: ${player2.totalValue()}`)


let winningAnnouncement = ""
if (player1.totalValue() > player2.totalValue()) {
  winningAnnouncement = "Player 1 wins the game!"
} else if (player2.totalValue() > player1.totalValue()) {
  winningAnnouncement = "Player 2 wins the game!"
} else {
  winningAnnouncement = "Game ended in a TIE!"
}

console.log(winningAnnouncement)
