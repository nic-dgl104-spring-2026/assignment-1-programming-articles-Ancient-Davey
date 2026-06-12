// workshop3-tdd-cycle.js
// =================================================================
// DGL104 Week 5 — WORKSHOP 3 (10 minutes)
// -----------------------------------------------------------------
// Goal: experience the TDD Red-Green-Refactor loop.
//
// You will build a small function ONE TEST AT A TIME.
// Write the test FIRST. Run it. Watch it fail (RED).
// Then write the SIMPLEST code that makes it pass (GREEN).
// Repeat.
//
// HOW TO RUN:  node workshop3-tdd-cycle.js
// =================================================================

// ---- THE TARGET ------------------------------------------------
//
// You're building a function isValidPassword(password) that returns
// true if the password meets ALL these rules, false otherwise:
//
//   1. At least 8 characters
//   2. Contains at least one digit (0-9)
//   3. Contains at least one uppercase letter
//   4. Contains at least one lowercase letter
//
// =================================================================


// ---- THE FUNCTION (you'll write this) --------------------------


function isValidPassword(password) {
  if (password.length < 8) return false;

  let hasDigit = false;
  let hasUpper = false;
  let hasLower = false;

  for (let char of password) {
    if (char >= '0' && char <= '9') hasDigit = true;
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    if (char >= 'a' && char <= 'z') hasLower = true;
  }

  return hasDigit && hasUpper && hasLower;
}



// ---- TINY TEST HARNESS (DO NOT MODIFY) -------------------------

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); console.log(`  \u2713 ${name}`); passed++; }
  catch (err) { console.log(`  \u2717 ${name}\n      ${err.message}`); failed++; }
}
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error(`expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  };
}


// ---- THE TDD CYCLE ---------------------------------------------
//
// Work through these in ORDER. After each step:
//
//   1. Uncomment the next test.
//   2. Run the file. The test should FAIL (red \u274c).
//   3. Edit isValidPassword to make it pass.
//   4. Run again. The test should PASS (green \u2713).
//   5. Make sure all PREVIOUS tests still pass.
//   6. Move to the next test.

console.log("\nRunning tests...\n");


// === STEP 1: 8+ characters ===
// Uncomment this test. Then make isValidPassword return true for any
// password 8 characters or longer.

// test("accepts a password with 8+ characters and all rules", () => {
//   expect(isValidPassword("Abcdef12")).toBe(true);
// });


// === STEP 2: rejects short passwords ===
// Uncomment. Then update isValidPassword to also handle this case.
// HINT: simplest fix is to check password.length >= 8.

// test("rejects a 7-character password", () => {
//   expect(isValidPassword("Abc123x")).toBe(false);
// });


// === STEP 3: requires a digit ===

// test("rejects a password with no digits", () => {
//   expect(isValidPassword("Abcdefgh")).toBe(false);
// });


// === STEP 4: requires an uppercase letter ===

// test("rejects a password with no uppercase letter", () => {
//   expect(isValidPassword("abcdef12")).toBe(false);
// });


// === STEP 5: requires a lowercase letter ===

// test("rejects a password with no lowercase letter", () => {
//   expect(isValidPassword("ABCDEF12")).toBe(false);
// });


// === STEP 6 (BONUS): all rules at once ===
// If you finish early, add this test. Then look at your function.
// Is it readable? Could you REFACTOR it now that you have tests?

// test("strong password passes", () => {
//   expect(isValidPassword("MyP@ssw0rd")).toBe(true);
// });
function isValidPassword(password) {
  if (password.length < 8) return false;

  let hasDigit = false;
  let hasUpper = false;
  let hasLower = false;

  for (let char of password) {
    if (char >= '0' && char <= '9') hasDigit = true;
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    if (char >= 'a' && char <= 'z') hasLower = true;
  }

  return hasDigit && hasUpper && hasLower;
}


// ---- RESULTS ---------------------------------------------------

console.log(`\n${passed} passed, ${failed} failed.\n`);


// =================================================================
// THE TDD RHYTHM
// -----------------------------------------------------------------
//
//   RED      \u2192  GREEN     \u2192  REFACTOR
//   (fails)      (passes)      (improves)
//
// You are not allowed to write production code unless it is to
// make a failing test pass. This feels strange at first.
//
// Try to genuinely follow this. Don't write the full function and
// then comment out tests. Write one test, watch it fail, write the
// minimum code to make it pass, then move on.
//
// =================================================================
// REFLECTION (write in your journal):
//
//   - What was the simplest code that made the FIRST test pass?
//     (Hint: it shouldn't have checked digits or letters.)
//   - At which step did your function feel "done enough" to refactor?
//   - Did writing tests first change how you wrote the function?
// =================================================================
