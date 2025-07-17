---
title: Todo - Delete Todo By Id
type: assignment
topic: go-server
---

# Todo - Delete Todo By Id

## Assignment

Extend **"/todo/:todo_id"** endpoint to DELETE a todo from the list.

## Context

The handler function now controls requests that are recevied for a specific id. This extension allows the user to delete a specific todo from the list.

## Content

Following the same pattern used for the previous handlers, create a `deleteHandler()` that:

1. Deletes an item from the list of todos by id.
2. Saves the new list after deleting the item.
3. Handles the errors using `errorReply` or returns `http.StatusNoContent` using `textReply`.
