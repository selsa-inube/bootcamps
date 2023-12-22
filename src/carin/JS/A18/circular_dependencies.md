Can you see how it handles cycles? What would go wrong when a module in a cycle does replace its default exports object?

The requiere function uses the ./path arg to look for a module, so, the initial value is empty because the module has not loaded. However, in the case we assign any value to its default exports object, the requiere function reload the value given in its return and try to reload the modules that uses it.

In the case of circular dependencies, these multiple reloadings will overflow the stack.
