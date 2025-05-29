---
title: Testing - Word Counter
type: assignment
topic: go
---

# Testing - Word Counter

## Assignment

Following the [Word Counter](./go-as-word-counter.md) assignment, this is about extending the program with some tests.

Test at least the following scenarios:

### Words

1. When the user types a single sentence with some words.
2. When the user types multiple sentences with some words per sentence.
3. When the user types a single word.
4. When the user types a single composed word. Example: "read-only".
5. When the user types multiple break lines (Example: \n\n).
6. When the user types "Exit", "exit", or "EXIT".

### Lines

1. When the user types a single line.
2. When the user types multiple lines without a break line in between lines.
3. When the user types multiple lines with one or more break lines in between lines.
4. When the user types "Exit", "exit", or "EXIT" at the start, middle, and end of a line.

## Constraints

- Use only the testing package to create the tests.
- If a test fails, the error message should indicate the specific operation that failed (apart from the expected vs. result comparison)
- When creating the tests, you may find yourself in situations where the original assignment didn't specify something. For those scenarios, you can make decisions about how your program should behave and test that.
