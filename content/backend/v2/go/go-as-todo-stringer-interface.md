---
title: Todo - Stringer Interface
type: assignment
topic: go
---

# Todo - Stringer Interface

## Situation

Right now the list doesn't have a propietary way of printing the list content. We're relying on the main program to define how the list is printed.

## Assignment

Extend the List type to include a new method called `String()` so we can make this type compliant with the `Stringer interface` from `fmt` and control how a list is printed.

### Stringer

For more information about the Stringer interface you can check your notes from the Head First Go chapter on interfaces or check this exercise: https://go.dev/tour/methods/17

### Main

We're controlling in main how to print the list. Remove the formatting from the program and just call `fmt.Print(l)` to print the list.

### Format

In main we were printing the list using the format:

```go
fmt.Printf("Title: %s, Done: %t, CreatedAt: %s, CompletedAt: %s\n", task.Task, task.Done, task.CreatedAt, task.CompletedAt)
```

You must change it so that it prints each item like this (the number represents the index of the task in the list):

1. Complete task: `- [X] 0: New Task\n`
2. Incomplete task: `- [ ] 0: New Task\n`

### Tests

1. Extend the tests from `todo_test.go` to include the `TestString()` test. This test should test the print of incomplete and complete items.
2. Check the tests of `main_test.go` and refactor them if you need to in order to make them all pass.
