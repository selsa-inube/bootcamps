---
title: Todo - Test DELETE Requests
type: assignment
topic: go-server
---

# Todo - Test DELETE Requests

## Assignment

Test that DELETE requests work for deleting existing todos.

## Context

We have tests for GET and POST requests. Now we'll extend it to have tests for DELETE requests.

## Content

1. Create a `TestDelete()` function to add test for delete operations.
2. Create two tests inside the function: `"Delete"` and `"CheckDelete"`.
3. Use `"Delete"` to delete the first todo in the list. Validate StatusCode.
4. Use `"CheckDelete"` to get the whole todo list. Validate that the length is reduced in 1 and that the first todo is no longer "Task 1" but "Task 2"

> ![TIP]
> You may find useful to check these functions: `http.NewRequest()` and `http.DefaultClient.Do()`
