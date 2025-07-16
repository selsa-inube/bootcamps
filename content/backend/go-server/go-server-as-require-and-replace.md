---
title: Todo - Require and Replace
type: assignment
topic: go-server
---

# Todo - Require and Replace

## Assignment

Import the todo package by using require and replace statements in go.mod

## Context

In future tasks we will need to make use of the todo package we previously developed. Since we don't have it in a publish registry, we can't just `require` it and start working. So, we must use a `replace` as well to make it work.

## Content

Up until this point we've been using mostly the standard library of Go to get the packages the program needs. Now we need to use a package that is not public.

For the sake of the example, lets say that we plan to publish the package in a future, but not for now. So, how do we import it in our current server project?

### Assumptions

1. We plan to publish the todo package in a future in `github`.
2. Our username/account in github is `johndoe`. (you can use your username instead of this fake one).
3. The package will be published as `todo`.

### Require

1. The first step to import the packaage is using `require`.
2. Run this command: `go mod edit -require=github.com/johndoe/todo@v0.0.0`
3. We use v0.0.0 because the package isn't published nor versioned.
4. You can use your username instead of `johndoe`.
5. Check your go.mod file. Did something change?
6. What happens if you run this code? `go list -m all`.

> [!NOTE]
> If you use Powershell, add double quotes to "-require=github.com....".

### Replace

Just requiring the module isn't enough, since it won't be able to find it in the path we provided to github. To fix this:

1. Let's indicate to where to find the package by changing the module path.
2. Run this command: `go mod edit -replace=github.com/johndoe/todo=../todo`
3. Here we're assuming that the todo package is just one level above in our file system. You can set the relative path that works in your file system.
4. Check your go.mod file. Did something change?
5. What happens if you run this code again? `go list -m all`.

### Go Get Works?

1. Try runnning `go get github.com/johndoe/todo`.
2. Did it work?
