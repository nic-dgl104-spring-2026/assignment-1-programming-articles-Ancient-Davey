# Debugging and Bug Tracking Guide

## Bugs are Normal
f you’ve ever thought “it works, so it must be correct,” you’re not alone… and you’re probably wrong.
Bugs are inevitable in programming. The goal isn’t to avoid them completely, but to handle them well when they happen.

## Having a Debugging Mindset
Good debugging starts with the right attitude like, "The bug is real. My assumption is wrong." Instead of trusting what you think the code does, focus on what it actually does.
Key Principles:
- Reproduce before you fix it
- Isolate before the fix
- Verify before  you celebrate -- make sure the fix actually worked

## The Debugging Loop
1. Reproduce
- Find exact steps to trigger the bug
- Write them down

2. Isolate
Use tools to locate the problem:
- console.log()
- breakpoints
- step-through debugging
- rubber-duck explaining

3. Fix
- Make the smallest possible change
- Don’t “fix everything at once”

4. Verify
- Test the bug again
- Test other cases
- Make sure nothing else broke

## Debugging Tools
The debugger as the name implies helps to locate bugs by:
- Pausing execution (breakpoints)
- Step through code line-by-line
- Inspect variables in real time
- View call stack (how you got there)

If you just so happen to be working on a browser or web app your best options would be to use:
- Sources - breakpoints and stepping through code
- Console - run JavaScript live
- Network - check if requests are sent
- Elements - inspect and modify HTML/CSS

Another option but not really recommended option would be using AI for debugging as much as it is easy to get an output it might not be the right one. 
Ai can help, but only for some things.
Good for:
- Explaining errors
- Suggesting possible causes
- Brainstorming test cases

Bad for:
- Hidden bugs in unseen code
- Complex or environment-specific issues

Treat AI suggestions as hypotheses, and not complete answers.

## Bug Tracking
When you find a bug it is important to write a report on it as memory tends to fail and this gives a definite proof that the bug was an issue and needed to be fixed.
A good bug report includes:
- Title
- Steps to reproduce
- Expected behaviour
- Actual behaviour
- Environment details

Make sure to label the Severity and Priority of the bug:
- Severity = how bad the bug is
- Priority = how urgent it is to fix

## Summary
Most people already know what a bug is and what it can cause, but may not know how to exactly fix it. This little documentation gives a little bit of insight on how to find a bug and what to do when you find one. Debugging is a core skill to develop as the faster you can find, understand, and fix bugs the better developer you become.
