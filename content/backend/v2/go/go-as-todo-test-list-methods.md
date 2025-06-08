---
title: Todo - Test List methods
type: assignment
topic: go
---

# Todo - Test List methods

## Situation

Our List type now supports 5 methods: Create, Delete, Complete, Save, and Get. This assignment is about adding some testing to ensure the functionality works as intended.

## Assignment

### Test file

Create these tests in a test_todo.go file (same directory as todo.go)

### Tests

You must create the following test functions:

1. TestAdd
2. TestComplete
3. TestDelete
4. TestSaveAndGet

### Test guidelines

1. Two tasks are the same if their Task properties are equal.
2. If you intend to compare task properties that are different from the Task property, you must compare first the Task property. This means, if you want to check that the Done properties are equal in the expected and result values, you must confirm first that you are comparing the same task by their Task property.
3. When testing adding or removing items from the list, you must check the target task was properly added or deleted as well as the list length.
4. Use a temporal file when testing the Save and Get methods. More about this in the next section.

## Tips: testing Save and Get

For testing this functionality you will need some additional tools. Check them while you try to create the testing function:

1. `os.CreateTemp()`: this will help you create a temporal file to be used while the test is running.
2. `tf` (temporal file): this is the first of two values returned by `os.CreateTemp()`. You will need the `tf.Name()` getter method to know the name of the file.
3. `t.Fatalf()`: use this method from the testing suite to make the test fail for reasons that are not related to our todo code. Example: error when creating or deleting a temporal file with `os`.
4. Use two lists to solve the test: one for creating a list and saving it to a temp file, and another one to get the list from that temp file.
5. Since you created a temporal file, it is important to ensure that the testing deletes the file. Otherwise each test run will create more and more temporal files without control.
