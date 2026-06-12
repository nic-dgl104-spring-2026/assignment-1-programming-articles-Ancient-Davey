[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/t3WF5L37)
# Why Testing Your Code Early Will Save You Later: A Beginner’s Guide to Code Testing
## Introduction
When you’re first learning programming, testing your code usually isn’t your top priority. Most of the time, you’re focused on just getting something to work. If you run your program and it gives the right output once, that can feel like a success.
But the reality is that code that works once isn’t always reliable. As you start adding more features or making changes, things can break in ways you didn’t expect. That’s where testing comes in.
Having a good code testing mindset will save you from hiccups later in the code that you are building. So, it is recommended that you begin to learn to test code out of habit now rather than later. This will save you in the future when you build code and even when applying for a job because having the ability to test code is pretty valuable in my mind.
In this article, I’ll walk you through the basics of code testing, why it matters, and how to start using simple testing approaches as a beginner. Whether you’re building small apps or just learning how functions work, these strategies will make your coding process smoother and more professional.
________________________________________
## What Is Code Testing?
Code testing is the process of checking that your program behaves the way you expect it to. It’s not just about seeing if something runs, it’s about making sure it produces the correct results under different conditions.
Testing isn’t only about fixing bugs either. It also helps improve the overall structure and quality of your code. When you write tests, you’re forced to think more clearly about what your code is supposed to do.
Testing isn’t just about fixing bugs; it also helps improve the overall quality of your code. When you take the time to test properly, you start to feel more confident in what you’ve built because you know it works the way it should. Once a piece of code has been tested, you can move forward without constantly worrying that something might suddenly break later on.
________________________________________
## Why Beginners Should Care About Testing
It’s easy to assume testing is only important for large or complex projects, but it matters just as much when you’re starting out.
Testing helps you:
•	Catch mistakes early
•	Understand your own code better
•	Avoid breaking things when you update your program
•	Spend less time debugging later
One of the biggest benefits is confidence. When you test your code properly, you don’t have to second-guess whether something works, you already know it does. That makes it much easier to build on top of your existing work.

________________________________________
## 1. Manual Testing (The Starting Point for Most People)
The simplest type of testing is manual testing; running your program and checking results yourself.

### Example

```python
def add_numbers(a, b):
    return a + b

print(add_numbers(2, 3))   # Expected: 5
print(add_numbers(-1, 1))  # Expected: 0
 ```

This works, but it’s not scalable. You have to remember every case and check outputs manually.
________________________________________
## 2. Writing Simple Automated Tests
Automated tests let the computer check your work for you.
A very basic approach is using assert statements:
```Python
def add_numbers(a, b):
return a + b

assert add_numbers(2, 3) == 5
assert add_numbers(-1, 1) == 0
assert add_numbers(0, 0) == 0

print("All tests passed!")
```

Why this is better:
•	Runs instantly
•	Detects problems automatically
•	Ensures consistency
________________________________________
## 3. Unit Testing: Testing Small Pieces
Unit testing focuses on testing individual functions or components.
Example: Testing a Function
```Python
def is_even(number):
return number % 2 == 0

 Unit tests
assert is_even(2) == True
assert is_even(3) == False
assert is_even(0) == True
```
Each test checks one specific behavior. If one fails, you immediately know what broke.
________________________________________
## 4. Using a Testing Framework (unittest)
Python includes a built-in testing framework called unittest, which is more structured.
```Python
import unittest

def multiply(a, b):
return a * b

class TestMathFunctions(unittest.TestCase):

def test_multiply_positive(self):
self.assertEqual(multiply(2, 3), 6)

def test_multiply_by_zero(self):
self.assertEqual(multiply(5, 0), 0)

if __name__ == "__main__":
unittest.main()
```
Benefits:
•	Organized test cases
•	Clear output messages
•	Easy to expand
________________________________________
## 5. Edge Case Testing
Edge cases are unusual or extreme inputs that might break your program.
Example:
``` Python
def divide(a, b):
return a / b

# Edge case tests
assert divide(10, 2) == 5

try:
divide(10, 0)
assert False # Should not reach here
except ZeroDivisionError:
assert True
```

________________________________________
## 6. Test-Driven Development (TDD)
Test-Driven Development is a powerful approach where you:
1.	Write tests first
2.	Write code to pass the tests
3.	Refactor
Example
```Python
# Step 1: Write test
def square(x):
return x * x

assert square(3) == 9

# Step 2: Improve code later if needed
```
TDD encourages you to think about expected behavior before writing the implementation.
________________________________________
## 7. Testing in App Development
If you’re working in something like MIT App Inventor, testing looks a bit different. Instead of writing code-based tests, you interact with your app directly:

•	Running the app in real time
•	Clicking buttons and checking results
•	Testing inputs manually
Example logic:
```JavaScript
// Pseudocode example
when Button.Click:
result = input1 + input2
display result

// Test cases:
input: 2, 3 → output: 5
input: 0, 0 → output: 0
input: -1, 5 → output: 4
```
Even though it’s more visual, the same ideas still apply. You’re still checking if your app behaves correctly in different situations.
________________________________________
## Common Mistakes Beginners Make
When starting out, it’s easy to fall into a few common traps:
•	Only testing simple or “happy path” cases
•	Forgetting to test after making changes
•	Assuming something works because it worked once
•	Ignoring unusual inputs
These mistakes are completely normal. The important thing is recognizing them and improving over time.

________________________________________
## What I Learned About Testing
When I first started programming, I didn’t really test my code properly. I would run it once, see that it worked, and move on. But as soon as I made changes, things would start breaking and I wouldn’t always know why.

Once I started using simple tests like assert, things became much easier. I could check my code quickly and make sure everything still worked after changes. It also helped me understand my own logic better because I had to think about what each part of my program was supposed to do.
Looking back, testing isn’t just something extra—it’s part of writing good code.

________________________________________
## Conclusion
Testing might seem like extra work at first, but it actually saves you time and frustration in the long run. It helps you catch problems early, understand your code better, and build confidence in your work.
As a beginner, you don’t need anything complicated to get started. Simple tools like assert statements and basic unit tests are more than enough. Over time, you can move on to more advanced techniques and tools.
The most important thing is building the habit. Once testing becomes part of your workflow, your code will become more reliable, and you’ll spend less time debugging and more time actually building things.
________________________________________
## References
DEV Community. (2020). How To Write The Perfect Documentation For Your GitHub Project. https://dev.to
## Tools used
CoPilot – used for brainstorming and spelling and code checks.

Microsoft Word -- used for writing this document.

