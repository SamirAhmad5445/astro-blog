---
layout: "../../layouts/PostLayout.astro"
title: the reduce() method
date: 2023-05-05
author: Samir Ahmad
image: { src: "/images/post-6.jpg", alt: "A picture of coder" }
description: The reduce method is one of the most powerful and versatile methods in JavaScript.
draft: false
category: javascript
---

## what is the reduce() method

The reduce method is one of the most powerful and versatile methods in JavaScript. It allows you to process an array of values and reduce them to a single output value by applying a callback function on each element of the array.

The syntax of the reduce method is:

```javascript
array.reduce(callbackFn, initialValue);
```

The callbackFn is a function that takes four parameters:

- accumulator: The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
- currentValue: The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
- currentIndex: The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
- array: The array reduce was called upon.

The callbackFn should return a value that will be used as the accumulator for the next call to callbackFn. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce.

The initialValue is an optional parameter that specifies the initial value for the accumulator. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

### Examples

Let's see some examples of how to use the reduce method in JavaScript.

#### Summing up numbers

One of the simplest and most common use cases for reduce is to sum up all the numbers in an array. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum); // 15
```

In this example, we use an arrow function as the callbackFn that takes two parameters: acc and cur. The acc represents the accumulated sum of all the previous elements, and cur represents the current element. The arrow function returns acc + cur, which is then used as the acc for the next call to callbackFn. The initial value for acc is not specified, so it defaults to numbers[0], which is 1. The iteration starts from numbers[1], which is 2.

Here is how each iteration looks like:

| acc | cur | return |
| --- | --- | ------ |
| 1   | 2   | 3      |
| 3   | 3   | 6      |
| 6   | 4   | 10     |
| 10  | 5   | 15     |

The final return value is 15, which is assigned to sum.

We can also specify an initial value for acc by passing a second argument to reduce. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(sum); // 25
```

In this example, we pass 10 as the initial value for acc. This means that callbackFn starts executing with numbers[0] as cur and 10 as acc. The iteration starts from numbers[0], which is 1.

Here is how each iteration looks like:

| acc | cur | return |
| --- | --- | ------ |
| 10  | 1   | 11     |
| 11  | 2   | 13     |
| 13  | 3   | 16     |
| 16  | 4   | 20     |
| 20  | 5   | 25     |

The final return value is 25, which is assigned to sum.

#### Finding the maximum or minimum value

Another common use case for reduce is to find the maximum or minimum value in an array. For example:

```javascript
const numbers = [10, -5, -2, -7];
const max = numbers.reduce((acc, cur) => Math.max(acc, cur));
console.log(max); //10
```

In this example, we use Math.max as the callbackFn that takes two parameters: acc and cur. The Math.max function returns the larger of the two values. The return value of Math.max is then used as the acc for the next call to callbackFn. The initial value for acc is not specified, so it defaults to numbers[0], which is 10. The iteration starts from numbers[1], which is -5.

Here is how each iteration looks like:

| acc | cur | return |
| --- | --- | ------ |
| 10  | -5  | 10     |
| 10  | -2  | 10     |
| 10  | -7  | 10     |

The final return value is 10, which is assigned to max.

Similarly, we can use Math.min as the callbackFn to find the minimum value in an array. For example:

```javascript
const numbers = [10, -5, -2, -7];
const min = numbers.reduce((acc, cur) => Math.min(acc, cur));
console.log(min); // -7
```

In this example, we use Math.min as the callbackFn that takes two parameters: acc and cur. The Math.min function returns the smaller of the two values. The return value of Math.min is then used as the acc for the next call to callbackFn. The initial value for acc is not specified, so it defaults to numbers[0], which is 10. The iteration starts from numbers[1], which is -5.

Here is how each iteration looks like:

| acc | cur | return |
| --- | --- | ------ |
| 10  | -5  | -5     |
| -5  | -2  | -5     |
| -5  | -7  | -7     |

The final return value is -7, which is assigned to min.

#### Flattening an array of arrays

Another interesting use case for reduce is to flatten an array of arrays into a single array. For example:

```javascript
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = arrays.reduce((acc, cur) => acc.concat(cur));
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

In this example, we use the concat method as the callbackFn that takes two parameters: acc and cur. The concat method returns a new array that contains all the elements of acc and cur. The return value of concat is then used as the acc for the next call to callbackFn. The initial value for acc is not specified, so it defaults to arrays[0], which is [1, 2]. The iteration starts from arrays[1], which is [3, 4].

Here is how each iteration looks like:

| acc         | cur    | return            |
| ----------- | ------ | ----------------- |
| [1, 2]      | [3, 4] | [1, 2, 3, 4]      |
| [1, 2, 3,4] | [5,6]  | [1,2 ,3 ,4 ,5 ,6] |

The final return value is [1,2 ,3 ,4 ,5 ,6], which is assigned to flat.

We can also use an empty array as the initial value for acc by passing a second argument to reduce. For example:

```javascript
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(flat); // [1 ,2 ,3 ,4 ,5 ,6]
```

In this example, we pass [] as the initial value for acc. This means that callbackFn starts executing with arrays[0] as cur and [] as acc. The iteration starts from arrays[0], which is [1 ,2].

Here is how each iteration looks like:

| acc          | cur    | return             |
| ------------ | ------ | ------------------ |
| []           | [1 ,2] | [1 ,2]             |
| [1 ,2]       | [3 ,4] | [1 ,2 ,3 ,4]       |
| [1 ,2 ,3 ,4] | [5 ,6] | [1 ,2 ,3 ,4 ,5 ,6] |

The final return value is [1 ,2 ,3 ,4 ,5 ,6], which is assigned to flat.

### Conclusion

The reduce method in JavaScript is a powerful tool for processing arrays and reducing them to a single output value. It can be used for various purposes, such as summing up numbers, finding the maximum or minimum value, flattening an array of arrays, and more. The reduce method takes a callback function that defines how the accumulator and the current value are combined, and an optional initial value that defines the starting point for the accumulator. The reduce method returns the final value of the accumulator after iterating over all the elements in the array.

I hope you enjoyed this post and learned something new about the reduce method in JavaScript. If you have any questions or feedback, please leave a comment below. Thank you for reading! 😊
