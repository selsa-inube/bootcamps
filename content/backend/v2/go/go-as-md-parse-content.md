---
title: Markdown - Parse Content
type: assignment
topic: go
---

# Markdown - Parse Content

## Situation

We have a program that can create HTML files but those files only have the header and footer content. We must insert the body of the document as well.

## Assignment

Extend the program so we can pass an existing markdown file to the program so it can parse it and include it as the body of the HTML document.

### Flags

1. Now we need to get the markdown file so we can parse it. For this to work, you must create a the `in` flag, which is of type string and must contain the path to the markdown file.
2. Refactor the program so the `out` flag is now optional inside the program. If the user passes it, we use that string to create the new file. If the user doesn't pass it, we can use the name of the input filename to name the output filename (example: -in `README.md` -> out: `README.md.html`)

> [!TIP]
> Check filepath.Base() for the refactor.

### Functions

To make the parsing work, you must create a new function: `parseContent()`. This function:

1. Gets the input that it should parse into HTML. This input is a parameter of the function and is of type `[]byte`.
2. Returns a `[]byte` with all the content now in HTML.

### Tests

You must create the `TestParseContent()` test. This test requires that you prepare some resouces:

1. You need a markdown file to use in the test. Check below to find a content you can use to create this test file.
2. You need an HTML file with the expected result. This file is known as a `golden file` in the testing world because is the file that represents the expected result of the function.

With these files, your test can:

1. Read the markdown file.
2. Pass the bytes of what you read to parseContent() and save the result.
3. Read the golden file.
4. Compare the bytes of what you got from the function vs. What you read from the golden file. If the comparison is not equal, the test fails.

> [!TIP]
> Check `bytes.Equal()`

### Dependencies

You don't have to create the code to read line by line of the markdown file and decide how to create HTML tags to transform the document. We'll use a couple of open source packages to process the file.

Using `go get` install these packages in your program:

1. [blackfriday](https://github.com/russross/blackfriday)
2. [bluemonday](https://github.com/microcosm-cc/bluemonday)

You'll need from them:

```go
output := blackfriday.Run(input)
body := bluemonday.UGCPolicy().SanitizeBytes(output)
```

With these packages, you can now make this function handle the header, body, and footer parts of the HTML document.

### Markdown files

1. Create a README.md file inside /md that explains how to use the program.
2. Use the following markdown file to test your function:

```md
# Test Markdown File

Just a test

## Bullets

- Links [Link1](https://example.com)

## Quotes

> Quotes in **bold** and _italic_ text
```

## Result

We should be able to call the program like: `go run main.go -in README.md -out readme` and get a file inside the md/ directory with the file `readme.html`. This file must contain the value of the two constants.
