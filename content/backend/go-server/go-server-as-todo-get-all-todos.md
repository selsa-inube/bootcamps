---
title: Todo - Get All Todos
type: assignment
topic: go-server
---

# Todo - Get All Todos

## Assignment

Create a handler to return the whole list of todos.

## Context

Our server only handles GET requests to "/", where it returns a plain text. This assignment extends the functionality of the server so it can return the whole list of todos when the client performs a GET request to "/todo".

## Content

### Datafile

The first thing we need to do to make this extension work is to have a place where our `todo` package can get (read) the list of todos. So, apply these changes to the project:

1. Create the "datafile.json" file in `/server`.
2. Extend the program so it receives a new flag named `datafile` (-f), which is a string that receives the URL of the file used as database. It's default value should be `datafile.json`.
3. Pass the value of the flag to `NewMux()`. This will allow the handlers to make use of the file.

You can save this example task in the file so it doesn't starts empty and you can manually test your requests:

```json
[
  {
    "Task": "my first task",
    "Done": false,
    "CreatedAt": "2025-07-14T16:44:49.287402-05:00",
    "CompletedAt": "0001-01-01T00:00:00Z"
  }
]
```

### getAllHandler

In `handlers.go` create the `getAllHandler` function:

1. This handler should be able to access the parameters of any handler (`ResponseWriter` and `*http.Request`)
2. The handler should have access to `datafile` (string).
3. The handler should create a list using `todo.List{}` and then `Get` the list from `datafile`.
4. Handle the error if getting the list from the file fails. Use `errorReply` in this scenario.
5. With the list at hand, create and initialize a `response` variable using the `todoResponse` type.
6. Use `jsonReply` to complete the response to the request.

### Mux

1. Add `getAllHandler` to the mux created by `newMux()`
2. Make the handler work for both **"/todo"** and **"/todo/"** endpoints.

### Questions

Consider this questions. We'll solve them in the next assignment.

1. What happens if we perform a POST request to **"/todo"**?
2. How could we use the same endpoint for both GET and POST request?
