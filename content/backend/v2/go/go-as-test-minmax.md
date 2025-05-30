---
title: Testing - MinMax
type: assignment
topic: go
---

# Testing - MinMax

## Assignment

This assignment is about testing the [minmax](./go-as-minmax.md) function you created previously.

Create a testing file and test at least the following scenarios:

1. What should happen if you correctly pass a min, a max and a set of values?
2. What should happen if the you just pass a min, a max and a single value?
3. What should happen if the value passed as min is actually greater than max?
4. What should happen if not a single value passed is within the range?
5. What should happen if both min and max are negative?
6. What should happen if both min and max are equal?

## Constraints

- Use only the testing package to create the tests.
- If a test fails, the error message should indicate the specific operation that failed (apart from the expected vs. result comparison)
- When creating the tests, you may find yourself in situations where the original assignment didn't specify something. For those scenarios, you can make decisions about how your program should behave and test that.
