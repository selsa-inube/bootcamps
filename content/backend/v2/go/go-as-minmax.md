---
title: Minmax
type: assignment
topic: go
---

# Minmax

## Assignment

Create a program that asks the user about a minimum value, a maximum value and a list of values. After that, filter out all the values that are out of range and print the values in range using a slice.

## Conditions

1. All values must be obtain from the user through the command-line in runtime (don't use os.Args)
2. You can ask an input from the user maximum three times.
3. Don't use packages or modules, all the code must be inside a single file (package main).
4. Your solution must have a func minmax(). That function must have min, max, and values as parameters and must return an slice of float64 numbers. The values parameter should be variadic.
5. Your solution must have a func getInput() whose only purpose is to get input from the user. It returns a string with the whole user input.
6. Apart from the mandatory minmax() and getInput() functions, you can create as many new functions as you need.
7. When printing the result in the terminal, the value printed must be an slice.
