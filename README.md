# math-combinations
Compute the number of ways of picking "r" unordered outcomes from "n" possibilities. <br>
**Combination function only supports a positive numbers or 0 as argument.** <br> <br>
Factorial function use a math rule: <br>
_C(n, r) = n! / ( (n - r)! x r! )_.
## Quickstart
  * Download and import [math-factorial](https://github.com/mix0000/math-factorial). 
  * Download `math-combinations.js` and import it with `<script>` tag or ES6 `import`.
  * Now you can use the combinations as,
   ```javascript
 Math.combinations(n, r)
```
## Examples 
 ```javascript
 Math.factorial(7, 5) // 21
 Math.combinations(5, 5) // 1
 Math.factorial(7, 1) // 7
 Math.factorial(-5) // error
 Math.factorial(5, -5) // error
 Math.factorial(5, 10) // error
```
