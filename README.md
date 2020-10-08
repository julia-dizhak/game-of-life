
# Game of Life

> Archlet fullstack developer coding challenge.

## Demo
[demo](https://julia-dizhak.github.io/game-of-life/) hosted on Github Pages. 

## The Challenge

Write a simple version of the [game of life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) with the stack ES6+JSX, React and Redux.

This challenge should take you a couple of hours and your are free to choose which feature to implement. There is no time pressure. Just notify us by email when you are done.

We are going to look at your code in terms of simplicity, structure and style. This includes how the commits are structured and what the commit message style looks like.

Please also write an imaginary todo list in this repository of what could be changed or added in the future.

If you want to, then you could also implement unit tests and try to make it as performance as possible - fancy optimization tricks - let your mind free.

## Conway's Game of Life (description and rules)

It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. 

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which has one of two possible states, live or dead.

_But for simplicity, I use data structure as two-dimensional array with finite number of cols and rows._

The Game of Life has this name because of Conway's genetic laws, rules which cells should follow. Every cell interacts with its 8 neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. 

_In my implementation cell = 0 means death, cell = 1 means life_

The rules are: 
* the cell = 0 becomes 1 (a live) when it has 3 life neighbours, otherwise it stays 0
* the cell = 1 dies when it has less than 2 lives (underpopulation) and greater than 3 lives (overpopulation), otherwise it stays 1

So reproduction happens with exactly 3 neighbors, death happens with < 2, > 3 neighbours

## Implementation details

* **Step** 1 Starter code
Initial state: first I need to create a 2 dimensional array that stores a random collection of 1 and 0.

* **Step 2** Display a grid
Display a grid on the UI site (could be white and black squares).
I can draw grid by canvas or by just DOM elements (test performance)

* **Step 3** Implement rules
I need to implement a mechanism (based on rules) of how cells should change after one time frame iteration. 
The idea to keep 2 states old (previous) and new one (next state) for each cell. 
And based on the previous state of the cell itself and his 8 neighbors state, update state if it's needed or stay like it was (need to think about performance).

So I have to count neighbors, check edge cases for the grid and implement the rules which I described.
