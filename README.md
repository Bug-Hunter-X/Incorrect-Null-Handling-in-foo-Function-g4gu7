# JavaScript Bug: Incorrect Null Handling

This repository demonstrates a common, yet subtle, bug in JavaScript related to null handling. The function `foo` is designed to add two numbers, however, it incorrectly returns 0 when either input is null.

## Bug Description
The function `foo` has an implicit assumption that null values will always be handled gracefully by returning 0.  In many cases, this is undesirable.  A null value might represent an unexpected condition which should be communicated more explicitly.

## Solution
The proposed solution provides several options for handling null values, showcasing best practices for defensive coding and robust error handling.