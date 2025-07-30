---
title: Todo - Test POST Requests
type: assignment
topic: go-server
---

# Todo - Test POST Requests

## Assignment

Test that POST Requests work for creating new todos.

## Context

The current tests check that the program supports GET Requests, and they even use `http.Post()` operations inside. But this assignment is to properly test POST Requests to the `/todo` endpoint.

## Content

1. Create a `TestAdd()` function to test the addition of new todos to the list.
2. This function should run internally two tests: `"Add"` and `"CheckAdd"`
3. Run these tests using `t.Run()`
4. The `"Add"` test should make an `http.Post()` request to `/todo`. Validate the StatusCode.
5. The `"CheckAdd"` test should make an http.Get() request to `/todo/4` (or whatever value correspond depending on how many items you added to the tempfile). Validate the StatusCode and the taskName.
6. Don't forget to close the Body at the end of the `"CheckAdd"` test.
