
# Game of Life

> Archlet fullstack developer coding challenge.

## Demo
[Demo](https://julia-dizhak.github.io/game-of-life/) hosted on Github Pages. 

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
* the cell = false becomes true (alive) when it has 3 life neighbours, otherwise it stays false
* the cell = true dies (false) when it has less than 2 lives (underpopulation) and greater than 3 lives (overpopulation), otherwise it stays true

So reproduction happens with exactly 3 neighbors, death happens with < 2, > 3 neighbours

## Run an App
To run an app in development mode. Open http://localhost:3000 to view it in the browser.

```sh
npm start
```

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

```sh
npm run test
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```sh
npm run build
```

Deploy on github-pages and app is ready to be deployed.

```sh
npm run predeploy
npm run deploy
```

## Designing a game

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

### Technologies

* React
* Redux (it is not necessary for this game to use Redux, but it is a requirement)
* HTML, CSS

### Todo
A simple implementation of Conway's Game of Life using ReactJS framework

* Customize configuration: speed, number of rows and cols
* Provide a possibility to customize color for alive/dead cells
* Display a message on UI where generation becomes stable after some amount of steps

