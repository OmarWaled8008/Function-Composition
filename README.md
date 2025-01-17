# Function Composition

## Overview

This repository provides a solution for creating a function that represents the composition of an array of functions. Given an array of functions `[f1, f2, f3, ..., fn]`, the goal is to return a new function `fn` that represents the function composition of the array. 

In mathematical terms, the function composition of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.

If the array of functions is empty, the output should be the identity function, `f(x) = x`.

## Problem Statement

### Example 1:
- **Input:** `functions = [x => x + 1, x => x * x, x => 2 * x]`, `x = 4`
- **Output:** `65`
- **Explanation:**
  - Evaluating from right to left:
    - Starting with `x = 4`
    - `2 * (4) = 8`
    - `(8) * (8) = 64`
    - `(64) + 1 = 65`

### Example 2:
- **Input:** `functions = [x => 10 * x, x => 10 * x, x => 10 * x]`, `x = 1`
- **Output:** `1000`
- **Explanation:**
  - Evaluating from right to left:
    - `10 * (1) = 10`
    - `10 * (10) = 100`
    - `10 * (100) = 1000`

### Example 3:
- **Input:** `functions = []`, `x = 42`
- **Output:** `42`
- **Explanation:**
  - The composition of zero functions is the identity function, so `f(x) = x`, which means `f(42) = 42`.

### Constraints:
- `-1000 <= x <= 1000`
- `0 <= functions.length <= 1000`
- All functions accept and return a single integer.

## Solution

To solve this problem, the approach is to create a function `compose` that takes an array of functions as an input and returns a new function representing the composition of those functions. 
