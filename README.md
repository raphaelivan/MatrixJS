MatrixJS
========

MatrixJS is a lib for bi-dimensional arrays for Javascript.
(Future suport multi-dimensional)

Exemple:

#create a matrix with 10 rows and 20 cols
var mtx = new Matrix(10, 20); 

#add an element to a specific position
mtx.addElement("element", {row:3, col:10});

#get an element position
var position = mtx.getElement("element");

#remove an element from a position row:3, col:10
mtx.clearPosition(10, 3);

#get a random position on matrix
var randomPosition = mtx.getRandomPosition();

#if you want only empty positions
var randomEmptyPosition = mtx.getRandomPosition(true);

#get center position from matrix
var centerPosition = mtx.getCenterPosition();

#Iterate matrix
mtx.forEach(function(row, col) { console.log("row:"+row+", col:"+col) });

Fork the project and HELP US to improve this lib.