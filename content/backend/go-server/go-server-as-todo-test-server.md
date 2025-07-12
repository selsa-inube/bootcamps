---
title: Todo - Test Server
type: assignment
topic: go-server
---

# Todo - Test Server

## Assignment

Automate the testing of your server by doing some requests and validating responses.

## Context

Your server runs and you could manually test it using Postman.

## Content

### Test Server

You can run your program so the server starts and then use Postman to try some requests. This is good to manually test the server. Nonetheless, we need our test suite to be able to do the same in a programatic way.

To achieve this, we need to give our test the ability to do the same. To run a server on its own and do some requests to it.

We can get this by using the `httptest` that is exported from `net/http`. With this package we'll be able to create a server that can be shared to our tests so the can use it to do requests and validate responses.

To make it work follow these instructions:

1. Create the setupAPI function. See its signature below.
2. Mark the function as a test Helper function. You can achieve it by using `t.Helper()` right at the start of the function.
3. Create a server using `httptest.NewServer()`. This function asks for an `http.Handler` as an argument, use you `newMux` function here.
4. The function returns both an `url` string and a `cleaner` function. The `url` can be assigned using the `URL` property of your recently created server.
5. Assign to the cleaner variable a function that internally calls the `Close()` method of your server. This will be useful to close the server when your tests finish.
6. Return the `url` and the `cleaner` function.

```go
func setupAPI(t *testing.T) (url string, cleaner func()) {
}
```

### Tests

You must create two tests:

1. TestGetRoot
2. TestGetNotFound

#### TestGetRoot

This test should:

1. Setup the test by defining the variables `path`, `expectedCode`, `expectedContent`.
2. Continue the setup of the test by starting the test server using `setupAPI()`. Save the `url` string and `cleaner` function as well.
3. Finish the setup stage of your test by deferring the close of the server using the cleaner function.
4. Execute the GET request. Use `http.Get()` for it. This function needs a url, which you should form it using the `url` of the server + the `path` of the resource you want.
5. Validate the `StatusCode` of the response matches the `expectedCode` you defined.
6. Validate the `Body` of the reponse matches the `expectedContent` you defined. You can use `strings.Contains()` for this comparison.

#### TestGetNotFound

Follow the same structure as in the previous test. Use a path to a resource you know doesn't exist.

### Status Codes

You can directly use literal values like **200** or **404** in your validations. But, in order to make the tests more readable, use:

1. `http.StatusOk` and `http.StatusNotFound` when you need the numeric value (comparisons)
2. `http.StatusText()` when your test fails and you want to log the status you got vs. the expected status.
