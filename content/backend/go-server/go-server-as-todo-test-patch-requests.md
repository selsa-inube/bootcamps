---
title: Todo - Test PATCH Requests
type: assignment
topic: go-server
---

# Todo - Test PATCH Requests

## Assignment

Test that PATCH requests work for marking todos as completed.

## Context

We have tests for GET, POST, and DELETE requests. Now we'll extend it to have tests for PATCH requests.

## Content

1. Create a `TestComplete()` function to add test for completing todos.
2. Create two tests inside the function: `"Complete"` and `"CheckComplete"`.
3. Use `"Complete"` to mark the first todo in the list as completed. Validate StatusCode.
4. Use `"CheckDelete"` to get the whole todo list. Validate: StatusCode, TotalResults equals the length of the todo list, the first item is completed, the other items are incomplete.

> ![TIP]
> You may find useful to check these functions: `http.NewRequest()` and `http.DefaultClient.Do()`
