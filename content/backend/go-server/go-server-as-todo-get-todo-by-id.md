---
title: Todo - Get Todo By Id
type: assignment
topic: go-server
---

# Todo - Get Todo By Id

## Assignment

Create **"/todo/:todo_id"** endpoint to GET a single todo from the list.

## Context

The user can make GET requests to **"/todo"** to get the whole todo list. The idea is to extend the service so the client application can also create GET requests for a single todo in the list.

## Content

### Endpoints

We're only using **"/todo"** as endpoint. Both for creating new todos or for getting the whole todo list. Now we need to extend it to add a new endpoint: **"/todo/:todo_id"**. Example: **"/todo/3"**.

This extension will allow us in the future to:

1. Get a single todo from the list (**current assignment**).
2. Delete a single todo from the list (future assignment).
3. Mark as complete a single todo from the list (future assignment).

### Router

1. We'll keep using our `router` for everything related to our todos, including these requests for single todos within the list.
2. Extend the `router` returned function so it first checks if the requests are for the general **"/todo"** endpoint or if the requests are for a specific **"/todo/:todo_id"**.
3. If requests are for the general endpoint, keep using the logic the router has up until now.
4. If requests are for the specific endpoint, add new logic (follow next instructions).

### validateID()

Before attempting any operation, you must check that the list contains the id. Create the validateID function for this purpose.

Since the todo package defines ids based on the index in the list, you should check that the id:

1. Can be converted to `int`.
2. Is equal or greater than 0 (if your todo package defines the list as zero-based, if it is one-based it should be equal or greater than 1).
3. Doesn't exceed the length of the list.

Use this function inside the handler function returned by the router.

> [!TIP]
> You can make this function return (int, error)

### getOneHandler()

Create this new handler for getting a single todo from the list:

1. Use `todoResponse` to create the response.
2. Use `jsonReply`.

### Add getOneHandler() to the router

After validating the id of the request, call the `getOneHandler()`. Consider that this handler should be used only for GET requests. In future tasks you'll need to use different handlers for DELETE and PATCH requests to the same endpoint.
