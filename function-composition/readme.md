function composition is a functional programming concept that allows you to combine multiple functions to create a new function that applies the result of one function as the input to the next function in the chain. 

## Different ways of implementing function composition. 

- Using a higher order function 

```js
   // function to compose an array of functions 
   function composeFunctions(...functions) {
     return function (value) {
        return functions.reduce((acc, func) => func(acc), value);
     };
   }

   // sample functions to demonstrate the composition 
   function addOne(x) {
  return x + 1;
}

function doubleValue(x) {
  return x * 2;
}

function subtractThree(x) {
  return x - 3;
}

// compose the functions 
const composedFunction = composeFunctions(addOne, doubleValue, subtractThree);

// Call the composed function
const result = composedFunction(5);
console.log(result);
```

### Using arrow functions in ES6

```js
// Sample functions to demonstrate the composition
const addOne = x => x + 1;
const doubleValue = x => x * 2;
const subtractThree = x => x - 3;

// Compose the functions using arrow functions
const composedFunction = x => subtractThree(doubleValue(addOne(x)));

// Call the composed function
const result = composedFunction(5);
console.log(result); // Output should be 7: subtractThree(doubleValue(addOne(5))) = subtractThree(doubleValue(6)) = subtractThree(12) = 7


```


Your code for function composition in JavaScript is correct, and it should work as expected. Let's go through it step by step:

1. You have defined a function `composeFunctions` that takes a rest parameter (`...functions`) to accept any number of functions as arguments.
2. Inside the `composeFunctions` function, you return a new function that takes a single parameter (`value`).
3. You use the `reduce` method on the `functions` array to apply each function in the array to the `value`, effectively composing the functions together. The initial value for the `reduce` function is `value`, and the result of each function call is passed as the accumulator (`acc`) to the next function.
4. Finally, you call `composedFunction(5)` and log the result to the console.

Your sample functions (`addOne`, `doubleValue`, and `subtractThree`) demonstrate how the composition works with the given input (`5`). As explained in the comment, the output should be `7`:

- `addOne(5)` returns `6`
- `doubleValue(6)` returns `12`
- `subtractThree(12)` returns `7`

Therefore, `result` will be `7`, and the `console.log` statement will output `7` as expected. Your implementation successfully demonstrates function composition in JavaScript!