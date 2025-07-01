---
title: Markdown - Temporal File
type: assignment
topic: go
---

# Markdown - Temporal File

## Situation

We have a program that can only create HTML files using the name the user provides with the value from the `out` flag or the name of the markdown file (`in` flag).

## Assignment

Extend the program so that it can:

1. Create files using the `out` flag when the user provides it (already working).
2. Create files using temporal files instead of using the markdown file name. The temporal file name should start with the prefix "md" followed by a random number.
3. When the file is saved, print the name of the file created in `os.Stdout`, so the user can find the file.

### Temporal Files

In order to use temporal files, you'll need to use the `os.CreateTemp()` function. This function requires two arguments:

1. `dir`: The first argument indicates where to create the file. If you use "." you're indicating you want to create it in the current directory. If you leave it as "", you'll save it in the temp directory of your operative system. Use the one you prefer (recommended: current directory).
2. `name`: The second argument indicates the name of the file. Here you can use **"md\*.html"** to achieve the requested result. `*` is a placeholder where the function will automatically insert a random number.

> [!IMPORTANT]
> When you create the temporal file, the you have the file open to work with it. You can close it right after creating it and let saveHTML function to directly write in it.

### Printing the file name

Print the file name so the user can find the HTML file generated. Do it inside the `run()` function after you validate that the saving operation worked well.

### Tests

We only needed one test to validate the `run()` function. Now we'll need two tests:

1. `TestRunUsingOutFlag()`
2. `TestRunWithoutOutFlag()`

You should have no problems creating the test for the scenario where the user makes use of the `out` flag. This is because you know beforehand the name of the file the program should generate and you can write the test looking for that exact file.

When you try to test the other scenario, you will have a problem: you don't know the name of the `out` file before running the test, since it is different between executions.

We know the `run()` function is printing the name of the file, but if we use `fmt.Println(outfile)` to achieve the printing, we won't be able to intercept that value inside our test. So, try the following approach using the `io.Writer()` interface:

1. Extend `run()` to receive a new parameter named `writer`.
2. This parameter must be of type `io.Writer`, which means that the user of the function must pass an argument that satisfies this interface.
3. The `io.Writer` interface just requires that the value supports the `Write()` method.
4. When `main()` calls `run()`, you can pass `os.Stdout` as the `writer`. `run()` can then execute `fmt.Fprintln(writer, outfile)` and achieve the result of printing the file name in `os.Stdout`.
5. When your test calls `run()`, you won't pass `os.Stdout` because you won't be able to read what was printed. Instead, you will create a `buffer` variable using `bytes.Buffer` and pass it as the writer argument to `run()`. This variable will satisfy the interface and you will be able to access the buffer after `run()` finishes and get the file name.

## Result

The program should work like this:

1. `go run main.go -in README.md -out readme` -> `md/readme.html`.
2. `go run main.go -in README.md` -> `md/md342235112.html` (each execution must generate a different file name).
