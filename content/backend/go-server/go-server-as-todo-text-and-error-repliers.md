---
title: Todo - Text and Error Repliers
type: assignment
topic: go-server
---

# Todo - Text and Error Repliers

## Assignment

Create functions to control the different ways to reply a request.

## Context

Project handlers are using directly the `w.Write()` method to create a response. To avoid repeating code in the response of each endpoint, we'll create some functions to reply.

## Content

### Text Replier

Inside `server.go` create a function named `textReply()`. We will use this function to create responses using plain text. This function:

1. Should have `http.ResponseWriter`, `*http.Request`, `status` and `payload` variables as parameters.
2. The `status` parameter should be of type `int` and `payload` as type `string`.
3. Should define the Content-Type of the response as text/plain.
4. Should set the response `status` code using the parameter of the function.
5. Should write the `payload` to the body of the response.

### Error Replier

In `server.go` create a function named `errorReply()`. This function:

1. Has the same parameters as `textReply()`.
2. Should print in the terminal the error message, with a structure like: `Error 500: open database.json: no such file or directory`.
3. Finally, respond the request using `http.Error()`

### Refactor rootHandler

Refactor this handler so it

1. Makes use of `textReply()` instead of directly writing the response.
2. Makes use of `errorReply()` when the URL doesn't match
