---
title: Word Counter
type: assignment
topic: go
---

# Word Counter

## Assignment

Create a program that captures an input from the user through stdin, count how many words or lines the user typed, and print the count result.

## Conditions

1. The input should be captured using stdin.
2. The user can type many lines, with multiple words per line.
3. Use the word 'exit' to stop getting more input data.
4. By default, the program should count words.
5. The user can execute the program with the optional '-l' argument in order to change from counting words to counting lines. (example: `go run main.go -l`)
6. When counting words, the word 'exit' should not count as a new word in the counter of words.
7. When counting lines, the line with the 'exit' word should not count as a new line in the counter of lines.
8. Use os.Args to control the '-l' argument
