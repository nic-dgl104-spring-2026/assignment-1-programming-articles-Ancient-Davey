# Workshop 2 — Boundary Value Analysis

**Time:** 10 minutes
**Format:** Solo for 7 min, then 3-min class share-out

---

## The Function

You're testing a function that calculates **shipping cost** for an online store:

```python
def shipping_cost(weight_kg, country):
    """
    Calculate shipping cost based on weight and destination.

    - weight_kg must be > 0 and <= 30
    - country must be 'CA' (Canada) or 'US' (United States)
    - Canada: $5 base + $1 per kg
    - US:     $8 base + $1.50 per kg
    - Over 10 kg, add a $5 'heavy item' surcharge
    - Anything else raises ValueError
    """
    ...
```

You **cannot test every possible weight** (it's a continuous number). You **must pick representative cases**.

---

## Your Task

In your journal — or as comments in a file — write down the **inputs** you would test and **what you expect each one to return**. Don't write code yet. Just the list.

You're aiming for **at least 8 test cases** that, taken together, cover all the important boundaries.

Think about:

| Question | What it surfaces |
|---|---|
| What's the smallest valid `weight_kg`? | Lower boundary |
| What's just below the smallest valid weight? | Lower boundary — should fail |
| What's the largest valid `weight_kg`? | Upper boundary |
| What's just above the largest valid weight? | Upper boundary — should fail |
| What's exactly at the 10kg threshold? | Internal boundary (surcharge starts here) |
| What's just below and just above 10kg? | Internal boundary edges |
| What are the valid countries? | Valid case for each |
| What's an invalid country? | Should fail |
| What types could cause trouble? | `None`, `"abc"`, negative numbers |

---

## Template

Fill in something like this in your journal:

```
| #  | weight_kg | country | Expected result                  | Why                       |
|----|-----------|---------|----------------------------------|---------------------------|
| 1  | 0.0       | "CA"    | raises ValueError                | weight must be > 0        |
| 2  | 0.01      | "CA"    | $5.01                            | just inside lower bound   |
| 3  | ...       | ...     | ...                              | ...                       |
```

You should end up with **8–12 rows**. If you have fewer, you're probably missing boundaries.

## Test Cases
| # | weight_kg | country | Expected result | Why                                  |
|---|-----------|---------|-------------|--------------------------------------|
| 1 | 30.0      | "CA"    |  $35.00   | upper valid boundary                 |
| 2 | 30.01     | "CA"    |   ValueError | just above max weight                |
| 3 | 10.0      | "CA"    |   $15.00    | exactly at surcharge boundary        |
| 4 | 10.1      | "CA"    |  $20.01   | just above 10kg -- surcharge applied |
| 5 | 9.99      | "CA"    |     $14.99  | just below surcharge threshold       |
| 6 | 5         |  "US"    |    $15.50   | valid US case (8 + 1.5×5)            |
| 7 | 15        | "US"    |  $35.50   | US + surcharge (8 + 22.5 + 5)        |
| 8 | 5         | "MX"    |    ValueError | invalid country                      |


## Stretch (if you finish early)

Re-read your list. For each test case, ask: *"If I delete this row, would any bug still be caught by my other rows?"* If yes, the row is redundant. If no, it's earning its keep.

Boundary value analysis is about finding the **minimum set** of tests that catches the **maximum set** of bugs.

---

## Class share-out (3 min)

I'll ask three students for ONE test case each. Don't repeat one we've heard. We'll keep going until we've collected a full set of boundaries from the room.

---

## Reflection (for your journal)

- How many test cases did you list?
- Which boundary did you *forget* until you saw a classmate's list?
- For the AI2 project you submitted last week — list 3 boundaries you should have tested but didn't.
