---
title: Todo - Save and Get tasks
type: assignment
topic: go
---

# Todo - Save and Get tasks

## Situation

This exercise extends the todo application where we can create, complete and delete tasks. Now we're going to let the program save tasks in a file (Writefile) or get tasks from a file (Readfile).

## Assignment

## Save

Create the `Save` method for the `List` type following these guidelines:

1. The method should receive the `filename` as a string parameter, so the saved file has this name.
2. The method should return an error, so we get to know when a saving process fails and why.
3. Save the file using the `os.Writefile()` function.
4. To save a file you need to extract the values from the list and create a json with that information. Use `json.Marshall()` for that operation.

### Get

Create the `Get` method for the `List` type following these guidelines:

1. The method should receive the `filename` as a string parameter to know which file to read from the system. It must return an error so we get to know if the process worked or not.
2. Use the `os.Readfile()` function to read the file.
3. Handle the error when the file is not found.
4. When you get the json from the file, you must extract that information and store it in the list.
5. Do not attempt to Unmarshall a file whose length is zero.
