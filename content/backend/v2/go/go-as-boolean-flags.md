---
title: Boolean Flags
type: assignment
topic: go
---

# Boolean Flags

This task is about defining flags in a program and parsing their value when the program is executed.

## Explanations

### Args

As you know, we can call our programs with some additional arguments that we can retrieve during runtime using the `os` package.
The following program will print all the arguments passed to our programs, except the name of the program itself, which is stored in the index 0 of the `os.Args` slice.

```go
func main() {
  args := os.Args[1:]
  fmt.Println(args)
}
```

So, if we call or program like: `go run main.go -a -b -c`, we'll get to see `[-a -b -c]` printed.

### Flags

We typically call flags to those extra arguments passed when a program is executed. The most easy form of a flag is when you pass it with a `-` and a single letter. A common example is the `-m` flag for adding a message in a commit: `git commit -m "message"`.

## Design

Follow the next sections to understand how to implement your solution.

### File system

Use the following structure to solve the assignment:

```
¬flags/
  fl/
    ¬fl.go
  ¬main.go
  ¬go.mod
```

Start your module with: `go mod init flags`

### Boolean flags

Create a package named `fl` which will be used to define boolean flags:

1. If the program is executed with the `-l` flag, that argument is interpreted as `true` inside the program.
2. If the program is executed without the `-l` flag, that argument is interpreted as `false` inside the program.

### Usage

The main program relies on the package to:

1. Create the flag
2. Define a default value to the flag (applies when the program is executed without the flag)
3. Parse (read) the value for the current program execution (lets you know if you must keep using the default value or if you should change it)

**Your main.go file MUST be exactly like this:**

```go
// DON'T CHANGE THIS FILE
package main

import (
	"flags/fl"
	"fmt"
)

func main() {
	lines := fl.Bool("-l", false, "Flag to determine if the program should count words or lines")
	fmt.Println("Before parsing:", *lines) // Prints default value --> false
	fl.Parse()
	fmt.Println("After parsing:", *lines) // Prints parsed value

	if *lines {
		fmt.Println("The program should count lines")
	} else {
		fmt.Println("The program should count words")
	}
}
```

### Parse

The action of parsing is when the program accesses the `os.Args` slice and checks all the flags passed to the program execution.

1. Before `fl.Parse()` all defined flags use their default values.
2. After `fl.Parse()` all flags must have a value that depends on whether the flag was used in the program execution or not.

## Assignment

Here you can find the initial template for creating the package. Complete the package so the main program can:

1. Define the `lines` flag.
2. Print the default value before parsing
3. Print the correct value after parsing (`true` if you called the program with `go run main.go -l` or `false` if you called the program without `-l`)

```go
package fl

type Flag struct {
	value       // define type
	description // define type
}

var flags = // define value to control here all program flags

func Parse() {
	args := os.Args[1:]
	// Evaluate if the defined flags should change their default value
}

func Bool(cmd string, value bool, description string) *bool {
	// Add logic to create boolean flags
}
```
