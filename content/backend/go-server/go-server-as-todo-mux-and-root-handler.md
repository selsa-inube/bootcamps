---
title: Todo - Mux and Root Handler
type: assignment
topic: go-server
---

# Todo - Mux and Root Handler

## Assignment

Create a basic HTTP Server that responds to requests with plain text.

## Context

This is the first of multiple assignments where we'll create a server to handle todos. We'll be using the `todo` package developed in the go basics course in future assignments. At this point we will just create the first part of the project.

## Content

1. Create a new directory named `server`. The whole project will be created inside this directory.
2. Using just `main.go` create a mux, a handler and make the server listen and serve HTTP Requests.
3. The handler must be named `rootHandler` and it should respond with "Hello World" when a request is received to the path "/".
4. Validate that the request (`r`) is strictly equal to the path "/", otherwise return a response with status code 404.
5. The program should define the -p flag, which is of type int and that will allow the program to handle the port of the server. The default value should be `8080`.

## Tips

### Validate path

In the handler you have access to the request. Check the `r.URL.Path` property to validate the path.

### 404 Not Found

Use the function `http.NotFound()` if the path doesn't match the root path "/".

## Test

Run the program and use Postman to check the response of the server.
