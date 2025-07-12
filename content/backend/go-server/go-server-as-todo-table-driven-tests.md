---
title: Todo - Table-Driven tests
type: assignment
topic: go-server
---

# Todo - Table-Driven tests

## Assignment

Refactor your tests using table-driven testing.

## Context

The program has two separate tests. The idea is to have one that tests variants of the GET request.

## Content

### testCase type

1. Create the testCase type so you can create multiple cases to test.
2. The type should use structs and have the properties: `name`, `path`, `expectedCode`, `expectedContent`.
3. `name`: the name of the test.
4. `path`: the URL to use to run the test.
5. `expectedCode`: the HTTP Status Code that the test must be equal to.
6. `expectedContent`: the content that the body of the response must be equal to.

### TestGet

1. Instead of having two different functions to test a successful GET to root and a Not Found test, create a single function called TestGet.
2. Inside this new function create one test case for each scenario (Root and Not Found).
3. Iterate the cases.
4. Once you have the cases and you iterate them, use `t.Run()` to run each test case.

### Content-Type validation

When we compare the content of the response with the expected content, we need to know which type of content we're using to compare, because it is different to compare two JSON structures than it is to compare two plain texts.

So, when you are in the section of your test where you will compare the expected content with the response content, do this:

1. Create a switch statement
2. Define cases for that switch based on the "Content-Type" of the response
3. For now, we will need only the case where "Content-Type" is "text/plain". If so, perform the comparison between expected and response as you have it now.
4. Add a default case that makes the test fail with the error message: `t.Fatalf("Unsupported Content-Type: %q", r.Header.Get("Content-Type"))`
5. This means that our tests only support `text/plain` cases. We'll extend it in future assignments.
6. 💡 Use `r.Header.Get()` to know the "Content-Type" of the response.
