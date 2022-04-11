# Bingo

## Usage

```bash
npm install
````

To read game input from stdin:
```shell
npm start

```

To run tests:
```shell
npm test

```

## Set up

### Before the interview

1. Create a git repository to host your answer to this problem.
2. Ensure you have a working development environment set up for your chosen language.
3. Ensure you have line numbers visible in your editor, this will help with pair programming.
4. Ensure screen sharing and allowing remote control is set up in zoom (on some operating systems, this requires you to grant zoom special privileges)

### During the interview

You will be given a problem description.

1. Carefully read part 1 of the problem
2. Discuss how you will attempt the problem and what tools you will use.
3. Together with you interviewer, begin writing up your solution **as if you were writing production quality code**

### What we're looking for ?

We're looking to see how you approach the problem, this is a pair programming exercise, be sure to explain what you're doing and why you're doing it.

We're not looking for you to solve the problem as fast as possible. Cleaner, well tested code will get you further than a messy 1 liner.

We're not testing your memory, if there's some syntax you've forgotten, or an api you can't quite remember, look it up as you would at work or ask your pair.

## Adapted from [advent of code](https://adventofcode.com/2021/day/4)

You are the captain of submarine on a long journey. A giant squid has stopped you in your tracks and challenged you to a bingo game. If you win, the squid will let you continue on your journey.

The rules of bingo are summarized below if you need a refresher.

### Part 1 - Determining a winning bingo game

Your input will look like this as raw text. The first line being the called numbers in order followed by a bingo card.

```
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19
```

From this input, write a program that will determine whether this card will ever get Bingo.

### Part 2 - Determining a winning bingo game

You have an advantage over the squid, you know all the cards and the order the numbers will be called in advance. You also have first choice on which board will be yours. This means that you should be able to pick the board to ensure a win. 

Your input will look the same as above, with the additional boards listed below.

```
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
```

Can you write a program that will take this input and tell you which board to pick to guarantee a win against the giant squid?

## Rules of bingo

Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)
