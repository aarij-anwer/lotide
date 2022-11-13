# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aarijanwer/lotide`

**Require it:**

`const _ = require('@aarijanwer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns `array[0]` as the head
* `tail(array)`: returns all itmes after the head of `array` as an array
* `middle(array)`: returns the middle of `array` (one item if odd, two items if even, none if `array.length <=2`)
* `assertArraysEqual(actual, expected)`: assert function checking if arrays `actual` === `expected`, doesn't return only prints to console.log
* `assertEqual(actual, expected)`: assert function checking if primitive data types `actual` === `expected`, doesn't return only prints to console.log
* `assertObjectsEqual(actual, expected)`: assert function checking if objects `actual` === `expected`, doesn't return only prints to console.log
* `countLetters(phrase)`: return an object that enumerates each letter of the string `phrase`
* `countOnly(allItems, itemsToCount)`: given an array `allItems` and an object `itemsToCount`, it will return an object containing counts of everything that the input object listed.
* `eqArrays(array1, array2)`: returns true if `array1` and `array2` have the exact same contents and same length
* `eqObjects(object1, object2)`: returns true if `object1` and `object2` have the exact same key-value pairs
* `findKey(object, callback)`: scans `object` and returns the first key for which `callback` returns a truthy value. If no key is found, returns `undefined`.
* `findKeyByValue((obj, value)`: searches for a key on an object where its value matches a given value
* `flatten(array)`: takes `array` with other arrays inside and returns a single-level array
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: returns a new array based on the results of the callback function
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning
* `without(array1, array2)`: returns a subset `array1`, removing from it the elements from `array2`.
