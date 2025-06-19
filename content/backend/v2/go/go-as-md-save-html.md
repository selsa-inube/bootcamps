---
title: Markdown - Save HTML
type: assignment
topic: go
---

# Markdown - Save HTML

## Situation

This is the first of some assignments to create a program that takes a markdown file as input and produces a sanitized HTML file as output.

## Assignment

Create the save HTML function to save an HTML file in disk.

### File system

1. Create the `md` directory, where we'll store all the program code.
2. For this program we'll only need `main.go` and `main_test.go` files.

### Flags

This iteration requires only the `out` flag. This is a string flag so the user can pass the name of the HTML file.

1. This flag is mandatory. If the user doesn't pass a name, then the program must exit with status code 1.
2. The user must pass just the name of the file, without the `.html` extension.

### Functions

You must create the following functions (only):

1. `main()`
2. `run()`
3. `saveHTML()`

#### `main()` function

This is the entry point to your program. This is the place where you define flags and call the run function, which will be responsible for controlling the program execution.

Main runs the `run()` function. If that function returns an error, `main()` prints the error and finishes the program with status code 1.

#### `run()` function

This function will serve as a controller function, which means that the function will control the logical sequence of the program.

In this assignment, this function will start by using some constants, the flags, and the saveHTML() function to create an HTML file.

#### `saveHTML()` function

This function is responsible for receiving the path where the HTML file should be created along with the data that this file contains. Consider that:

1. This function must get the name of the saved file as an argument, including the .html extension.
2. This function must get the data to include in the file as an argument. The parameter should be of type `[]byte`.
3. This function must return an error if the process of saving the file fails.

### Constants

Create two constants outside the functions:

```go
const header = `<!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Markdown Preview Tool</title>
    </head>
    <body>
`

const footer = `
    </body>
  </html>
`
```

### Tests

You must create the TestRun() test.

> [!NOTE]
> It is not necessary to create a test for main() because the function will just call run().
> Also, it is not necessary to test saveHTML() since that function won't implement by itself the code to save files, we'll just use a package for that.

## Result

We should be able to call the program like: `go run main.go -out "index"` and get a file inside the md/ directory with the file `index.html`. This file must contain the value of the two constants.
