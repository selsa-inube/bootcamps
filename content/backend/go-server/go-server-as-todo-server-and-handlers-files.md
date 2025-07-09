---
title: Todo - Server and Handlers files
type: assignment
topic: go-server
---

# Todo - Server and Handlers files

## Assignment

Refactor your server to use separate files: handlers.go and server.go

## Context

Right now the project only uses the main.go file to set up the server.

## Content

### Handlers.go

1. Create the handlers.go file alongside the main.go file.
2. This file should belong to `package main`.
3. Move here the `rootHandler` you defined in main.go

### Server.go

1. Create the server.go file alongside the main.go file.
2. This file should belong to `package main`.
3. Create a new function here called `newMux`. This function doesn't have parameters and returns an `http.Handler`.
4. You previously created the mux of the server in main.go, move the code that creates the mux to the `newMux` function.
5. Make the mux instance handle the `rootHandler` and return the mux so we can use it in main.go to create our server.

### Main.go

#### Add flag for host

The program currently has a flag to get the port (`-p`) where the program will listen for request. Extend the program to add a new flag: host (`-h`).

This flag is of type string and its default value should be "localhost".

#### Create a server

If you're using `http.ListenAndServe()` to run the server, make the following changes:

1. Create a new variable where to save a server instance.
2. Initialize the variable using the `http.Server` type (struct).
3. Make this variable a pointer to a server.
4. Define the `Addr` property of the server struct to "host:port". Use the `-p` and `-h` flags for this purpose.
5. Define the Handler property of the server to be the mux returned by the `newMux` function from server.go
6. Start the server by calling its `ListenAndServe()` method.

## Test

Run the program and use Postman to check the server keeps working.
