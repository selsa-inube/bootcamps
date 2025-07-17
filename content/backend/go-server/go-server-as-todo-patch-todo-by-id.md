---
title: Todo - Patch Todo By Id
type: assignment
topic: go-server
---

# Todo - Patch Todo By Id

## Assignment

Extend **"/todo/:todo_id"** endpoint to mark a todo as completed in the list (PATCH request).

## Context

The handler function now controls requests that are recevied for a specific id. This extension allows the user to mark a todo as complete using a PATCH requests.

## Content

Following the same pattern used for the previous handlers, create a `deleteHandler()` that:

1. Marks an item from the list of todos as complete.
2. Validates that the request uses the `complete` query parameter. Example: **"/todo/1?complete"**. If the request doesn't use the query parameter, return a 400 status code.
3. Saves the new list after updating the item.
4. Handles the errors using `errorReply` or returns `http.StatusNoContent` using `textReply`.
