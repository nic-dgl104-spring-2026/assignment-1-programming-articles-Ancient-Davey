// workshop1-bug-hunt.js
// =================================================================
// DGL104 Week 4 — WORKSHOP 1 (10 minutes)
// -----------------------------------------------------------------
// Goal: practise the DEBUG LOOP — Reproduce, Isolate, Fix, Verify.
//
// The function below should compute the average of all the
// POSITIVE numbers in an array. It has at least THREE bugs.
//
// Your job:
//   1. REPRODUCE — run the file. Compare actual output to expected.
//   2. ISOLATE   — find each bug (use a debugger or print statements).
//   3. FIX       — make the smallest change that fixes each bug.
//   4. VERIFY    — re-run. All tests should now pass.
//
// HOW TO RUN:  node workshop1-bug-hunt.js
// =================================================================

// ---- THE BUGGY FUNCTION ----------------------------------------

function averageOfPositives(numbers) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      sum += numbers[i];
      count++;
    }
  }
  return sum / count;
}


// ---- TESTS (DO NOT MODIFY) -------------------------------------

function assertEqual(actual, expected, testName) {
  const pass = Math.abs(actual - expected) < 0.001;
  console.log(`  ${pass ? "\u2713" : "\u2717"} ${testName}`);
  if (!pass) console.log(`      expected ${expected}, got ${actual}`);
  return pass;
}

function runTests() {
  console.log("\nRunning tests...\n");
  let passed = 0;
  let total = 0;

  const tests = [
    // [input, expected, name]
    [[1, 2, 3, 4, 5],          3,    "all positive"],
    [[1, -1, 2, -2, 3, -3],    2,    "mixed positive/negative"],
    [[-1, -2, -3, 4, 5, 6],    5,    "negatives skipped"],
    [[10, 20, 30],              20,   "three positive"],
    [[5],                       5,    "single positive"]
  ];

  for (const [input, expected, name] of tests) {
    total++;
    if (assertEqual(averageOfPositives(input), expected, name)) {
      passed++;
    }
  }

  console.log(`\n${passed}/${total} tests passed.`);
  if (passed === total) {
    console.log("ALL BUGS FIXED \u2713\n");
  } else {
    console.log("BUGS REMAIN \u2717  Keep debugging.\n");
  }
}

runTests();


// =================================================================
// HINTS (only peek if you're stuck after 5 minutes!)
// -----------------------------------------------------------------
//
//   Bug #1: Look at the INITIALIZERS. What value should count
//           start at, before we've counted anything?
//
//   Bug #2: Look at the LOOP. From what index should we start?
//
//   Bug #3: Look INSIDE the loop. = vs += is a tiny typo with
//           a huge effect.
//
// =================================================================
//
// REFLECTION (write in your journal):
//
//   - Which bug did you find first? Which was hardest?
//   - Did you use the debugger or print statements?
//   - For each bug: what was the assumption you had to revise?
// =================================================================
