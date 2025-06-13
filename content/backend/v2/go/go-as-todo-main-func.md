---
title: Todo - Main Function
type: assignment
topic: go
---

# Todo - Main Function

## Situation

Create a command-line application to use the `todo` package.

## Assignment

You must create the main program. This program should make use of all the methods in the `todo` package so the user can admin tasks.

### Tests

This assignment won't describe in detail how the `main` program should work. Instead, we'll provide you all the tests for the `main` program so you can copy and paste it in your `main_test.go` file and use it as a guideline to create the program.

The previous lectures should help you analyze the test to find out what the main program is supposed to do.

```go
package main_test

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
)

var (
	binName  = "todo"
	fileName = ".todo.json"
)

func TestMain(m *testing.M) {
	fmt.Println("Building tool...")

	if runtime.GOOS == "windows" {
		binName += ".exe"
	}

	build := exec.Command("go", "build", "-o", binName)
	err := build.Run()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Cannot build tool %s: %s", binName, err)
		os.Exit(1)
	}

	err = os.WriteFile(fileName, []byte{}, 0644)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Cannot create file %s", fileName)
		os.Exit(1)
	}

	fmt.Println("Running tests....")
	result := m.Run()

	fmt.Println("Cleaning up....")
	os.Remove(binName)
	os.Remove(fileName)

	os.Exit(result)
}

func TestTodoCLI(t *testing.T) {
	task := "New Task"

	dir, err := os.Getwd()
	if err != nil {
		t.Fatal(err)
	}

	cmdPath := filepath.Join(dir, binName)

	t.Run("AddNewTask", func(t *testing.T) {
		cmd := exec.Command(cmdPath, strings.Split(task, " ")...)
		fmt.Println(cmd)
		err := cmd.Run()
		if err != nil {
			t.Fatal(err)
		}
	})

	t.Run("ListTasks", func(t *testing.T) {
		cmd := exec.Command(cmdPath)
		fmt.Println(cmd)
		out, err := cmd.CombinedOutput()
		if err != nil {
			t.Fatal(err)
		}

		expected := task + "\n"

		if expected != string(out) {
			t.Errorf("expected %s, got %s instead", expected, string(out))
		}
	})
}
```

### File system

1. Create the cmd directory inside the todo directory (todo/cmd).
2. Inside this directory, create the files `main.go` and `main_test.go`
3. Paste the tests provided previously in your test file.
