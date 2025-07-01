---
title: Todo - Use Flags
type: assignment
topic: go
---

# Todo - Use Flags

## Situation

In order to make use of all the methods from our `todo` package, we'll use the `flag` package.

## Assignment

This assignment has two parts:

1. Refactor the main program to use the `flag` package in order to control what the user wants to do.
2. Refactor tests to validate that all the operations.

### Main

Consider the following instructions to refactor the program:

1. Create the `list` flag to know if the user wants to see all incomplete tasks.
2. Create the `task` flag to create a new task in the list.
3. Create the `complete` flag to mark one task as completed.
4. Create the `delete` flag to delete one task from the list.
5. A user might pass more than one flag to the program execution, but we the program should perform only and and return. The hierarchy is as follows: `list > complete > delete > task`.
6. When you perform an operation that changes the list (complete, delete, or task) you must save the file.
7. If the user runs the program without a command, you must print an error message and exit the program with status code 1.
8. If an operation fails, you must print the error and exit the program with status code 1.
9. When returning the list of tasks, you must return only incomplete tasks with the following format:

```go
fmt.Printf("Title: %s, Done: %t, CreatedAt: %s, CompletedAt: %s\n", task.Task, task.Done, task.CreatedAt, task.CompletedAt)
```

### Tests

In a previous assignment, you received the code for testing the main function. Now you have to refactor it to test all the commands supported by main. Consider the following list to refactor the tests.

1. Adjust the "AddNewTask" test to execute the command `exec.Command(cmdPath, "-task", task)` instead.
2. Adjust the "ListTasks" test to execute the command `exec.Command(cmdPath, "-list")` instead.
3. Add "CompleteTask" and "DeleteTask" tests using flags.
