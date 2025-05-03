---
title: Packages
type: lecture
topic: go
estimate:
---

# Packages

- Book: Head First Go
- Chapter: Packages
- Quiz:

> [!WARNING]
> Read the following instructions on how to use modules before reading the chapter.

## Using Modules

### Find your go/src

The lecture lets you work directly in the go/src directory in order to create packages. To know where your go/src directory is you can:

1. Open the terminal
2. Type: `$GOPATH`
3. Check the route and navigate to it using the change directory command (`cd`)

In my case, after typing `$GOPATH` and hitting Enter, I get: **/usr/local/go/src**

When I navigate into that directory and check what is inside, I see packages like:

1. `fmt`
2. `bufio`
3. `bytes`
4. etc.

So, the author in the book is asking us to work in this directory. You can do it if you want, or you can work using modules (recommended).

### Create a module with packages

You can have a regular directory outside of that `$GOPATH` directory where you can work all the exercises in the book. Let's say you have the directory `~/Documents/books/go` and there is where you're practicing.

To add some order, let's create some subdirectories per chapter in there. So, if you use `ls`, you could see something like:

- ch1-syntax
- ch2-conditionals
- ch3-functions
- ch4-packages
- etc

**With that in place, you can create subdirectories now nested inside each chapter directory. One chapter per exercise.**

The first exercise you'll find in this packages chapter is about greeting functions. In order to solve it using modules, you can follow the following instructions:

1. Create the subdirectory ch4-packages/greeting
2. Navigate to this new subdirectory (using `cd`)
3. Initialize a module with any name, I suggest you use the name of the subdirectory: `go init mod greeting`
4. Create a main.go file where you will run your program: `touch main.go`
5. Create a subdirectory inside greeting called greet: `mkdir greet`
6. Inside this new subdirectory, create greet.go: `touch greet/greet.go`
7. **Those are all the files you will need.**
8. Now, in greet.go you can create the functions that the exercise ask of you: Hello() and Hi().
9. At the top of greet.go you can define that this file belongs to a package called greet (use the same name of the directory)
10. Now you can use these functions in main.go by importing the greet package. To do so you need to use the module path (greeting) + the package name (greet)
11. So, your main.go file should look something like this:

```go
package main

import (
	"greeting/greet"
)

func main() {
	greet.Hello()
	greet.Hi()
}
```
