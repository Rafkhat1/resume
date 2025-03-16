/*
Problem 1: Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/
function multiplesOf3Or5(number) {
    let result = 0;
    for(let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result += i;
        }
    }
    return result;
  }
  
  

  /* 
  Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
*/

function fiboEvenSum(n) {
    let sum = 0;
    let array = [1,2];
    for(let i = 2; i < n; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && array[i] <= n) {
            sum += array[i];
        }
    }
    return sum;
  }
  console.log(fiboEvenSum(60));

/* 
Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/