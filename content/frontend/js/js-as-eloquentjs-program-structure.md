---
title: Eloquent JS - Program Structure
type: assignment
topic: javascript
---

# Eloquent JS - Program Structure

## Assignment

## Looping a trinagle 

for(let i='#'; i.length<=7; i+='#'){
    console.log(i);
}

## FizzBuzz

for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

## FizzBuzz

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
