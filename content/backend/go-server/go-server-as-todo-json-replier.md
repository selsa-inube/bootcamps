---
title: Todo - JSON Replier
type: assignment
topic: go-server
---

# Todo - JSON Replier

## Assignment

Create a function that controls how to reply a request using JSON.

## Context

Our program is only able to create responses using plain text. We need to extend it so it is able to create responses using JSON. This will be useful when creating responses for GET requests about todos.

## Content

### Type todoResponse

In some situations we will need to create reply a request using JSON. We could create an struct from scratch each time we need to form a request and the apply a json.Marshall() operation on the struct to generate the JSON, but that would make us repeat code in different places of the program.

To avoid such repetition, we can create our own type based on structs. With this type we can define which properties will be included when we create JSON responses about the todos in the application.

Follow this instructions to create the type:

1. Create a new file named `todoResponse.go`. This file should belong to `package main` so we can use it in all the other files without requiring it.
2. Name the type `todoResponse` and make it use a struct as its base type.
3. The struct should have only one property: `Results`.
4. `Results` property should be of type `todo.List` and is used to include the todos that answer the request.

### MarshalJSON

With the type created, you can create multiple values using it. But the values themselves are not worthwile if we cannot convert them into JSON structures. To do so, we need to call the `json.Marshal()` method on our values.

The problem is that `json.Marshal` expects the value passes as an argument that satisfies the `Marshaler` interface. A type satisfies the interface if it implements the `MarshallJSON()` method.

So, we will extend the `todoResponse` type so it satisfies the interface and will use this case to complement with some extra details what gets included in the JSON:

1. Create a method for the `typeResponse` type named `MarshalJSON()`.
2. The method doesn't receive parameters, but returns `([]byte, error)`
3. Create a literal struct called `response`.
4. This struct should have three properties: `Results`, `Date`, and `TotalResults`.
5. `Results` has the same type as its counterpart property in todoResponse type (`todo.List`).
6. `Date` property should be of type `time.Time` and should be used to send the current time.
7. `TotalResults` property should be of type `int` and counts of how many items were included in `Results`.
8. After the `response` variable has been declared and initiallized (use the method receiver for this), you can return `response` from the method by calling `json.Marshal(response)`

### Struct Tags

Notice that all the properties in todoResponse type and the literal struct inside the method are exported (Uppercase). This means that the resulting JSON will have the properties in Uppercase as well.

Use Struct Tags inside the `MarshalJSON()` method so the properties are added to the JSON in snake_case.

### JSON Replier

With our type in place, we can now create a new replier in `server.go`. In this case, a replier for JSON content.

1. The parameters of the functions are the same as the other repliers. The only difference is that the payload of this function is of type `*todoResponse`.
2. You will need to call json.Marshal() to the payload to get the JSON to send in the response. Handle the error.
3. If there is an error creating the JSON, reply using the error replier. Use `http.StatusInternalServerError` as status code.
4. Set the "Content-Type" of the response to "application/json".
5. Add the status received as an argument to the response.
6. Write the JSON in the body of the response.
