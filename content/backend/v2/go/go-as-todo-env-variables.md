---
title: Todo - Env Variables
type: exercise
topic: go
---

# Todo - Env Variables

## Situation

We don't have a way to personalize where to store the list of tasks.

## Assignment

Let's use environment variables to control where the list of task is saved. By using environment variables we can change the file depending on the environment where the program is run.

### Exercise: Env variables

Before changing your code, try the following exercise so you get to work a little with env variables:

1. While working with ubuntu, open the terminal.
2. Print all the env variables available to programs with the command `export -p`.
3. Check that you don't have an env variable called `TODO_FILENAME`
4. Now, create the env variable by running the command export TODO_FILENAME=list.todo.json
5. Check again the whole list of env variables to see your newly created variable.
6. Close your terminal session (exit)
7. Open again your terminal and check again the list.

> [!TIP]
> You will find that the env variable is missing after reopening the terminal. This is because creating env variables with export applies only to the current session.
> This approach is enough to continue with our assignment. If you want to save the env variable in your system permanently, you'll need to change the config file of your shell (bash or zsh).

### Refactor main

Your program should have a filename variable where you store a default file where the program will save the list. But, when the program starts, you must check first if the current environment has defined the TODO_FILENAME env variable. If so, you must replace the default value with the value stored in the env variable.

Use `os.Getenv()` to get the env variable.

> [!TIP]
> Try with different values of the variable. Try as well closing and reopening the session to check if the default value works when TODO_FILENAME is not defined.
