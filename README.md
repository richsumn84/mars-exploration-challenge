# Mars Exploration Challenge

### Rules
* You cannot use external frameworks.
* Use one of these programming languages: Elixir, Erlang, Clojure, Haskell, JavaScript, Java, Ruby, Python, Scala.
* The output must be printed in the terminal (CLI) or saved in a file. Follow the pattern described at the end of the challenge.
* The input must be read from a file or parameters through the CLI.


### Context

A set of rover devices was sent to Mars by NASA and it's going to land in a upland area of the planet. This area is rectangular and must be explored by the rovers for the cameras to be able to have a full view of the area, sending images back to earth.

The position and direction of a rover, are represented by a combination of coordinates `x,y` and a letter representing a cardinal direction to which the rover points to, according to the compass rose.

![Compass Rose](./img/compass_rose.png)

The area is divided in a mesh to simplify navigation. An example position would be `(0,0,N)`, indicating that the rover is located at the lower left area and pointing north.

In order to control the rovers, NASA sends a simple sequence of letters. Possible letters are: `"L","R","M"`. `"L"` and `"R"` makes the rover turns 90 degrees to the left or right, respectively, without moving the rover. `"M"` moves the rover one step in the mesh, keeping the same direction.

The north point of `(x,y)` is always `(x,y+1)`.

To solve this problem, you have to create a program for processing a series of instructions sent to the rovers exploring Mars. Follow the input and output formats.

### Input

The first data entry is the upper right corner coordinate in the mesh. Keep in mind that the lower left will always be `(0,0)`.

The other entries will be information for the allocated rovers. Each rover is represented by 2 lines:

1. Indicates the rover's initial position.
2. Series of instructions ordering how the rover must explore the area.

A position is represented by two integers `(X Y)` and a letter, separated by spaces. Each rover will be sequentially controlled, which means that a second rover will only move when the first have finished its moves.

#### Example:

* 5 5
* 1 2 N
* LMLMLMLMM
* 3 3 E
* MMRMMRMRRM

### Output

The output must have a line for each rover, with the same entry order, indicating its final coordinates and direction.

#### Example:
* 1 3 N
* 5 1 E

:copyright: Copyright Xerpa
---

## Overview
* Input entries can be found and edited on:
[input_file](/src/doc/input.txt)
* The results will be displayed on the console.

## System Requirements
* **[NodeJS](https://nodejs.org/en/)** (version >= 8).

## Installing
* ```npm install```

## Running Application
* ```npm start```

## Running Unit Tests
* ```npm test```

