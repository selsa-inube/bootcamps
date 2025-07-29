---
title: Todo - Test GET Requests
type: assignment
topic: go-server
---

# Todo - Test GET Requests

## Assignment

Test GET requests for all todos or a single todo.

## Context

The test suite we have only tests the root path of the server and a not found scenario. This assignment extends the tests to check `/todo` and `/todo/:todo_id` endpoints.

## Content

### Add temp file to setupAPI

To be able to test our GET requests, we need a datafile that already has some todos created and make the test server to use that file to serve requests.
So:

1. Create a temporal file in `setupAPI()` where to store the todos to use in the tests.
2. Use that temporal file when creating the server so it has access to its content.
3. In the cleaner function add an `os.Remove()` operation so at the end of the tests the server is stopped and the temporal file is deleted.

### Add todos to temp file

The `setupAPI()` should work not only for creating a server that has access to the temporal file, but also to add some todos to the file so the GET requests can be validated. **Add three todos to the file so the server is ready to be used for testing GET Requests**

Consider:

1. Use a `bytes.Buffer` named `body` to store a todo to be saved.
2. Create each task with a for loop, so each todo name is equal to something like: `"Task %d"`, where `%d` equals de iteration count.
3. Use an encoder `json.NewEncoder()` to write in `body`
4. Create an item for each todo and encode it into `body`
5. Make an `http.Post()` to the server to save each todo. If you create three todos, then you should have three posts.
6. Validate that the response of each `http.Post()` equals `http.StatusCreated`.
7. The `http.Post()` must use `"application/json"` as Content-Type.
8. Handle errors. At this stage of errors should use `t.Fatal()` or `t.Fatalf()`.

### Extend Test Case type

Now that we will test GET requests, we may be interested in validating two things: the content of the response and the amount of items in the response.

So, extend the type for creating test cases so it also includes a property named `expItems`. This property should be of type integer and should help us test the amount of items expected for an individual test.

### New Test Cases

Create two new test cases inside `TestGet()`:

1. "GetAll" -> path: "/todo" --> expItems: 3
2. "GetOne" -> path: "/todo/1" --> expItems: 1

### application/json

When the test is running, it uses a switch to check the content-type of the response. Right now the tests are ready to handle `"text/plain"` responses, but not `"application/json"` responses.

The challenge here is to:

1. Use a decoder to transform the body of the request into a go struct
2. Use the struct to validate the expected items received.
3. Use the struct to validate the title of the first todo (using the example above: "Task 1")
