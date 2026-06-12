// workshop1-aaa-pattern.js
// =================================================================
// DGL104 Week 5 — WORKSHOP 1 (10 minutes)
// -----------------------------------------------------------------
// Goal: practise the ARRANGE-ACT-ASSERT pattern.
//
// You will write 5 unit tests for the function below.
// The function works correctly. Your job is to write tests
// that prove it works.
//
// HOW TO RUN:  node workshop1-aaa-pattern.js
// =================================================================

// ---- THE FUNCTION TO TEST --------------------------------------

function gradeForScore(score, maxScore) {
  if (maxScore <= 0) {
    throw new Error("maxScore must be positive");
  }
  if (score < 0 || score > maxScore) {
    throw new Error("score must be between 0 and maxScore");
  }
  const percent = (score / maxScore) * 100;
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}


// ---- A TINY TEST HARNESS (DO NOT MODIFY) -----------------------
//
// We're writing our own tiny test runner so you can see what frameworks
// like Jest and pytest do for you under the hood.
//
// In real projects you'd use a framework. The CONCEPTS are identical.

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  \u2713 ${name}`);
    passed++;
  } catch (err) {
    console.log(`  \u2717 ${name}`);
    console.log(`      ${err.message}`);
    failed++;
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
      }
    },
    toThrow() {
      // 'actual' should be a function here; we call it and expect an error
      let threw = false;
      try { actual(); } catch (_) { threw = true; }
      if (!threw) throw new Error("expected function to throw, but it didn't");
    }
  };
}


// ---- YOUR TESTS GO HERE ----------------------------------------
//
// Write FIVE tests following the Arrange-Act-Assert pattern.
// Each test should check ONE thing.
//
// Use the test() and expect() helpers shown above.
// Pattern:
//
//   test("descriptive name of what's being tested", () => {
//     // ARRANGE — set up inputs
//     // ACT     — call the function
//     // ASSERT  — check the result
//   });

console.log("\nRunning tests...\n");

// EXAMPLE — one test is already written for you.
// Use it as a template for the rest.

test("returns 'A' for a perfect score", () => {
  // ARRANGE
  const score = 100;
  const maxScore = 100;

  // ACT
  const result = gradeForScore(score, maxScore);

  // ASSERT
  expect(result).toBe("A");
});


// TODO 1 — Write a test that 50/100 returns "F"
//          (because 50% is below all the passing thresholds)

assertEqual(
  gradeForScore(50, 100),
  "F",
  "Returns F for 50%"
);

// TODO 2 — Write a test that exactly 90% (e.g. 90/100) returns "A"
//          (this is a BOUNDARY case — what happens AT the threshold?)

assertEqual(
  gradeForScore(90, 100),
  "A",
  "Returns A for 90%"
);

// TODO 3 — Write a test that 89/100 returns "B"
//          (just BELOW the boundary)

assertEqual(
  gradeForScore(85, 100),
  "B",
  "Returns B for 85%"
);

// TODO 4 — Write a test that maxScore = 0 THROWS an error
//          (hint: use expect(() => ...).toThrow())


assertThrows(
  () => gradeForScore(50, 0),
  "Throws when maxScore is 0"
);


// TODO 5 — Write a test that a negative score THROWS an error


assertThrows(
  () => gradeForScore(-10, 100),
  "Throws when score is negative"
);


// ---- RESULTS ---------------------------------------------------

console.log(`\n${passed} passed, ${failed} failed.\n`);


// =================================================================
// REFLECTION (write in your journal):
//
//   - Which test case was the easiest to think of?
//   - Which boundary case do you think the AUTHOR of this function
//     might have missed if they hadn't written tests?
//   - Look back at the function. Are there inputs you DIDN'T test
//     that could still cause bugs? (Hint: what about decimals?
//     What if score and maxScore are both 0?)
// =================================================================
