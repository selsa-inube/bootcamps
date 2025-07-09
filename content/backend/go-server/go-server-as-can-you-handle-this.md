---
title: Can You Handle This?
type: assignment
topic: go-server
---

# Can You Handle This?

## Assignment

Read the article and push the code as required down below in a directory named `handlers`.

## Lecture

https://dev.to/jpoly1219/can-you-handle-this-45m5

> [!NOTE]
> This lecture doesn't have a quiz.

## Code

In this assignment you have to mix the three forms used by the author to create a handler:

1. Define a type with its ServeHTTP method and pass it to your mux.
2. Create a function that can be converted into an http.HandlerFunc value and pass it to your mux.
3. Create a function that is passed to your mux usind the mux.HandlerFunc directly.

Create these three handlers, and use one for each one of the previously defined scenarios:

1. homeHandler -> writes "Hello World"
2. aboutHandler -> writes "Hello About"
3. helpHandler -> writes "Hello Help"

## Test

Use Postman to test your handlers.

## Appendix

### mux.Handle vs. mux.HandlerFunc

Check the arguments `mux.Handle` demands to be used. The second argument must satisfy the `http.Handler` interface, which means that you must create a value that supports the `ServeHTTP()` method. This approach is useful if you create a type with the method attached to it.

On the contrary, `mux.HandlerFunc` allows as its second argument a `func(http.ResponseWriter, *http.Response)`, so we can pass any function that has this same signature. This is more flexible because you don't have to create on your own type to satisfy the `http.Handler` interface. You just pass the function and the mux method handles how to make it work as a handler.

> [!TIP]
> You're not passing a handler in strict sense, you're passing a function that can then be converted to a handler that satisfies the `http.Handler` interface.

### mux.HandlerFunc vs. http.HandlerFunc

As stated in the previous comparison, when you use `mux.HandlerFunc` you're passing a function that the mux can then convert into a proper handler that satisfies the `http.Handler` interface. You can check that `mux.HandlerFunc` is actually a method of mux.

If you want to do this conversion all by yourself, without relying on mux to do it for you, you can. Instead of passing your function directly to the `mux.HandlerFunc` method you pass it to `http.HandlerFunc`.

⚠️ The most important part here is to see that **`http.HandlerFunc` is not a method, it is a type!**

Let's say you want to create multiple types that start with the Post prefix. You could create these types in any of the following forms:

```go
package main

type PostInt int
type PostString string
type PostBytes []byte
type PostStruct struct {
  author string
}
type PostFunc func(string) error
// ...
```

All these options are valid. **Including the last one**. If you want to use them in your program to create variables, you would do something like:

```go
func main() {
  a := PostInt(1)
  b := PostString("Hello")
  c := PostBytes([]byte("Hello"))
  d := PostStruct{
    author: "Shakespeare"
  }

  e := PostFunc(greet)
}

func greet(name string) error {
  fmt.Println(name)
  return nil
}
```

Notice that we take a literal value and pass it in parenthesis to the type so we can create and initialize a variable with them. The `PostFunc` example is the one we're interested now.

If we move all our types to a `blog` package, and then import them in our `main` package so the main function keeps working, we would need to import the `blog` package and use it like:

```go
import blog

func main() {
  // ...
  e := blog.PostFunc(greet)
}

func greet(name string) error {
fmt.Println(name)
return nil
}
```

This is exactly what we're doing when using `http.HandleFunc`. We import the `http` package and use the `HandlerFunc` type to create and initialize a variable.

The final touch here is that in our `blog` package we can define methods to our types as well! Even if the type uses a function as its value.

It can look something like:

```go
package blog

type PostFunc func(string) error

func (p PostFunc) ServePOST(w io.Writer, title string) {
  return w.Write(title)
}
```

You can then imagine that the `http` package has its `HandlerFunc` type, and that type has defined the `ServeHTTP` method with the signature required to satisfy the `http.Handler` interface.

That's why we can:

1. Create a function that may satisfy the interface.
2. Mix this function with the `http.HandlerFunc` type to create and initialize a variable.
3. The `http` package defines the `http.HandlerFunc` as a type that has the `ServeHTTP` method attached, so the value satisfies the `http.Handler` interface.
4. We can now use our recently created variable and pass it to `mux.Handle`.

> [!IMPORTANT]
> Yes, it is way easier to use the mux.HandlerFunc method because we just pass the function and the method handles it all, but it is important to know what is happening under the hood.
>
> mux.HandlerFunc is doing what we're doing here with the http.HandlerFunc type, and it works because the http package makes implements the ServeHTTP method to that type so it satisfies the http.Handler interface
