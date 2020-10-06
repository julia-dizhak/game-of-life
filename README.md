
# Game of Life

> Archlet fullstack developer coding challenge.

## The Challenge

Write a simple version of the [game of life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) with the stack ES6+JSX, React and Redux.

This challenge should take you a couple of hours and your are free to choose which feature to implement. There is no time pressure. Just notify us by email when you are done.

We are going to look at your code in terms of simplicity, structure and style. This includes how the commits are structured and what the commit message style looks like.

Please also write an imaginary todo list in this repository of what could be changed or added in the future.

If you want to, then you could also implement unit tests and try to make it as performance as possible - fancy optimization tricks - let your mind free.

## Conway's Game of Life (description and rules)

It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. 

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which has one of two possible states, live or dead.
_But for simplicity, I would use data structure as two-dimensional array with finite number of cols and rows._

The Game of Life has this name because of Conway's genetic laws or rules which cells should follow. 
Conway's genetic laws are delightfully simple. Every cell interacts with its 8 neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. 

_Let's imagine, that cell = 0 means death, cell = 1 means life_

The rules are: 
* the cell = 0 becomes 1 (a live) when it has 3 life neighbours, otherwise it stays 0
* the cell = 1 dies when it has less than 2 lives (underpopulation) and greater than 3 lives (overpopulation), otherwise it stays 1

So reproduction happens with exactly 3 neighbors, death happens with < 2, > 3 neighbours
