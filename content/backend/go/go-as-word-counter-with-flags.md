---
title: Word Counter with Flags
type: assignment
topic: go
---

# Word Counter with Flags

In the word counter program, we used `os.Args` to know if the user wanted to count words or lines. Also, we created our own package to define, parse and use flags when a program is executed.

This exercise is about refactoring the Word Counter program to use flags instead of directly accessing `os.Args` during the program execution.

## Flag library

We created a basic program for creating and parsing files, but in Go we have a more complete package to do the same and more. This package is called `flag` and you can import it just like you import `fmt` or `bufio`.

Also, you can use the same syntax we used in our own flag package. For more details you can see the documentation of the package here: https://pkg.go.dev/flag

## Assignment

You must refactor the Word Counter program to:

1. Use the flag package to define two boolean flags: `countLines` and `countBytes`.
2. Those flags should have a default value of `false` and the commands `l` and `b` respectively.
3. The default behavior of the program is to count words.
4. If the user runs the program with the flag `-l`, the program should count lines.
5. If the user runs the program with the flag `-b`, the program should count bytes.
6. If the user runs the program with both `-l` and `-b`, the program should count lines.
7. The program should have testing for each case: counting words, counting lines and counting bytes.

> [!NOTE]
> In our implementation we defined the flag exactly like "-l". When using the flag package, you can omit the "-".
