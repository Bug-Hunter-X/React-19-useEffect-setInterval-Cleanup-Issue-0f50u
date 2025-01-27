# React 19 useEffect setInterval Cleanup Issue
This repository demonstrates a common error related to using `setInterval` within the `useEffect` hook in React 18 and 19.  Forgetting to include a cleanup function to `clearInterval` leads to memory leaks and unexpected component behavior.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The `setInterval` function, when used without proper cleanup, continues to run even after the component unmounts. This causes a memory leak, as the interval keeps firing even when it's no longer needed.  This can also lead to unexpected behavior and performance issues in your application.

## Solution
The solution involves adding a cleanup function to the `useEffect` hook. This function, returned by the hook, is executed when the component unmounts or when the dependencies change.  In this case, it uses `clearInterval` to stop the interval.