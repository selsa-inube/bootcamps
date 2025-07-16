---
title: Todo - Post Todo
type: assignment
topic: go-server
---

# Todo - Post Todo

## Assignment

Support POST requests in **"/todo"** endpoint to create new todos.

## Context

The server only supports GET requests in the **"/todo"** endpoint. Those requests return the whole list of todos that are saved. This assignment extends the endpoint to support POST requests as well to create todos.

## Content

### Router

The program currently has `getAllHandler()` directly linked to the **"/todo"** endpoint, but now we need to use the same endpoint for requests using a different method (POST).

To keep the responsibility of `getAllHandler()` to just returning the whole list of todos, we shouldn't add logic to that function for checking which method was used in the request in order to know if the client application wants the list of todos or wants to create a new todo.

So, it would be better to create a new function that checks both the endpoint and the method in order to find out what the user wants, and then we can use the concrete handler that solves that specific need.

#### Create the router

1. Create a function called `router` in `handlers.go`.
2. The `router` receives `datafile` as a paramater.
3. The `router` returns an `http.HandlerFunc`. We will use this returned function to evaluate the endpoint + method of the request and then resolve which particular handler to use (examples: `getAllHandler` to get the list of todos or `addHandler` to create a new todo)
4. Inside the `router`, begin by returning a function that can be used as a handler (`func (w http.ResponseWriter, r *http.Request) {}`).

#### Refactor getAllHandler

1. The `router` now returns a function that works as `http.HandlerFunc`.
2. Move the logic about creating a list and getting the todos from `datafile` from `getAllHandler()` to this new function returned by `router`.
3. Since the `router` receives `datafile` as a parameter, the returned function has access to it. Make the returned function create the list and fill it by getting the todos saved in `datafile`.
4. Extend the `getAllHandler()` parameters so it can receive the list filled with todos as a parameter. Use pointers for it.
5. Refactor the code of `getAllHandler()` to make its logic use the list received.
6. The returned function from `router` should call `getAllHandler()`.

#### Use the Router

At this point we should have a `router` that returns a Handler function. This function is able to create a new todo list, fill it with the todos saved in `datafile` and call `getAllHandler()` using the list. Now is time to:

1. Refactor the mux returned from `newMux()` so instead of using `getAllHandler()` for the endpoint **"/todo"**, it uses the handler returned by `router()`.
2. Manually test your service. **It should be returning the list of todos as before!**

### Create addHandler

Following the same pattern as in `getAllHandler()` we will create the `addHandler()` to create and save new todos.

#### NewTask Type

1. Create the `addHandler()` function in `handlers.go`
2. Receive through parameters the same parameters as `getAllHandler()` plus `datafile`. We will need `datafile` to save the new todo.
3. Inside the function, create a new type called `NewTask` with the underlying type of struct. The struct should only have the property `Task` of type string.
4. The `Task` property of the struct should have the struct tag `json:"task"`. This is important because the client application will send the reqeust with a JSON that includes `task` in lowercase, followed by the title of the todo.
5. Create and initialize a new variable named `item` as an empty `NewTask`. We will use it to save there the body of the POST request.

#### Decoder and decode

To create a new todo, the client application must send a JSON with the string property "task". Since that information is received encoded in JSON, we can use a decoder to read it.

> [!IMPORTANT]
> Investigate the differences between reading a JSON using json.Unmarshal vs. json.NewDecoder.

1. When you want to read a file, you typically create a `scanner` and execute its `Scan` method (`scanner.Scan()`).
2. In this case, we need to create a `decoder` and execute its `Decode` method.
3. To create a new decoder, you can use `json.NewDecoder()`.
4. When creating a scanner, you should pass what you want to read (e.g. file). When creating a decoder, you must provide what you want to decode (the body of the request).
5. With the decoder ready, use its `Decode` method to read the body of the request. Save the result in the item variable.
6. Handle the error of the decoding operation. Print the error in the terminal and use `errorReply()`. Use `http.StatusBadRequest` as status code.

#### Add and Save

With title of the new todo saved in the `item` varaible, we can:

1. Use the `list.Add()` method to add the new todo to the list.
2. Use the `list.Save()` method to save the list in `datafile`.
3. Handle the error when trying to save the list. Use `errorReply()` and `http.StatusInternalServerError` as status code.
4. If the operation is successful, use `textReply()` to respond. Use `http.StatusCreated` as status code.

### Extend Router

Now we have a handler capable of adding a new todo to the list. It is time to refactor the handler function returned by the router so we can evaluate when to use `addHandler()`.

1. Add a `switch` to the function returned by the `router` to check the method used in the request.
2. If the method used is `http.MethodGet`, call `getAllHandler()`
3. If the method used is `http.MethodPost`, call `addHandler()`
4. If the method isn't any of these (`switch`'s default case), use `errorReply()` with status code `http.StatusMethodNotAllowed`.

### Test

You can test again your server. Try both GET and POST requests to see if the list returned matches the content of `datafile.json` and if you can add new todos to the list.
