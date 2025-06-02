---
title: Todo - Create, Complete, and Task
type: assignment
topic: go
---

# Todo - Create, Complete and Delete Task

## Situation

This is the first of a series of assignments to create a simple to-do application. In this particular task we'll create tasks, a list of tasks and a set of methods to work with them.

## Design

### Packages and file system

1. Our full implementation will have two packages: `todo` and `main`. For this assignment we'll work only with the `todo` package.
2. Use the following diagram to create the starting directories.
3. Inside `todo/` initialize a module with `go mod init todo`.

```
¬ todo/
  ¬ todo.go
  ¬ go.mod
```

### Types

For our to-do app we'll work with two types: `item` and `List`. Define the types in `todo.go` with the following conditions:

1. `item` is a private type.
2. An item instance has for attributes: `Task (string)`, `Done (bool)`, `CreatedAt (time.Time)`, and `CompletedAt (time.Time)`.
3. `List` is a public type. We'll let the user work with items through the list, not with the items directly.
4. A List instance is just an slice of items.

### Methods

As we said before, we'll let the user work with items through the list. So, we'll create some methods for the `List` type.

#### Add

1. This method only demands from the user the Task title in order to work.
2. This method doesn't need to return an error.

#### Complete

1. This method accesses the list in a specific index and marks the item as completed. This means that the `Done` property is now true and the `CompletedAt` property is equal to the current time.
2. This method must return an error value. Particularly useful if we're trying to access an invalid index in the list.

#### Delete

1. This method accesses a specific index of the list as well and deletes it.
2. Deleting means that the item should be removed from the list while the rest of items remaing in the list.
3. This method must return an error value. Particularly for the case where we're trying to delete an item in an invalid index of the list.

## Assignment

Using the previous design, implement the types and methods described. In future assignments we'll add more methods and will also work in the main package to use all this logic.
