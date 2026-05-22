// workshop2-shipping-refactor.js
// =================================================================
// DGL104 Week 3 — WORKSHOP 2 (25 minutes)
// -----------------------------------------------------------------
// Goal: REFACTOR this function across 4–6 small commits.
//        Keep the tests passing at every step.
//
// HOW TO RUN:
//   node workshop2-shipping-refactor.js
//
// The tests at the bottom of this file will run automatically.
// If you see "ALL TESTS PASSED" — you're safe to keep refactoring.
// If you see "FAILED" — undo your last change and try smaller.
// =================================================================

// ---- THE CODE TO REFACTOR ---------------------------------------

// Named Constants

const RATE_PER_KG = 0.5;
const PRIORITY_SURCHARGE = 10;
const MEMBER_DISCOUNT_MULTIPLIER = 0.9;
const MIN_SHIPPING = 5;
const OVERWEIGHT_THRESHOLD_KG = 50;
const OVERWEIGHT_SURCHARGE_PER_KG = 0.25;


// Helper function
function zoneMultiplier(zone) {
  if (zone === 'A') return 1.0;
  if (zone === 'B') return 1.5;
  if (zone === 'C') return 2.0;
  if (zone === 'D') return 3.0;
  return 1.0;
}

function applyMembership(cost, isMember) {
  if (isMember === true) {
    return cost * MEMBER_DISCOUNT_MULTIPLIER;
  }
  return cost;
}

function applyOverweightSurcharge(cost, weight) {
  if (weight > OVERWEIGHT_THRESHOLD_KG) {
    cost = cost + (weight - OVERWEIGHT_THRESHOLD_KG) * OVERWEIGHT_SURCHARGE_PER_KG;
  }
  return cost;
}


// ---- REFACTORED CORE FUNCTION ----------------------------------
function calculateShippingRefactored(shipment) {
  let cost = shipment.weight * RATE_PER_KG;

  cost = cost * zoneMultiplier(shipment.zone);

  if (shipment.isPriority === true) {
    cost = cost + PRIORITY_SURCHARGE;
  }

  cost = applyMembership(cost, shipment.isMember);

  if (cost < MIN_SHIPPING) {
    cost = MIN_SHIPPING;
  }

  cost = applyOverweightSurcharge(cost, shipment.weight);

  return Math.round(cost * 100) / 100;
}


// Adapter (keeps original function signature for tests)
function calculateShipping(weight, zone, isPriority, isMember) {
  return calculateShippingRefactored({
    weight,
    zone,
    isPriority,
    isMember
  });
}


// Test
function assertEqual(actual, expected, testName) {
  const pass = Math.abs(actual - expected) < 0.001;
  if (pass) {
    console.log(`  ✓ ${testName}`);
  } else {
    console.log(`  ✗ FAILED: ${testName}`);
    console.log(`      expected ${expected}, got ${actual}`);
  }
  return pass;
}

function runTests() {
  console.log("\nRunning characterization tests...\n");
  let passed = 0;
  let total = 0;

  const tests = [
    [10, 'A', false, false, 5,     "10kg zone A — min applies"],
    [10, 'B', false, false, 7.5,   "10kg zone B — multiplier"],
    [10, 'C', true,  false, 20,    "10kg zone C + priority"],
    [10, 'D', false, false, 15,    "10kg zone D — max multiplier"],
    [0,  'A', false, false, 5,     "0kg — min still applies"],
    [10, 'A', false, true,  5,     "10kg member — min wins over discount"],
    [20, 'B', false, true,  13.5,  "20kg zone B member"],
    [60, 'A', false, false, 32.5,  "60kg overweight surcharge"],
    [60, 'B', true,  true,  52,    "60kg zone B priority member"],
    [100,'C', true,  true,  111.5, "100kg zone C priority member"]
  ];

  for (const [w, z, p, isMem, expected, name] of tests) {
    total++;
    if (assertEqual(calculateShipping(w, z, p, isMem), expected, name)) {
      passed++;
    }
  }

  console.log(`\n${passed}/${total} tests passed.`);
  if (passed === total) {
    console.log("ALL TESTS PASSED ✓  Safe to commit and continue refactoring.\n");
  } else {
    console.log("SOME TESTS FAILED ✗  Undo your last change.\n");
  }
}

runTests();



// ---- YOUR REFACTORING TASKS -------------------------------------
//
// Make these refactors AS SEPARATE COMMITS. Run tests after each.
//
// COMMIT 1 — Rename parameters to be meaningful
//   w     → weight
//   z     → zone
//   p     → isPriority
//   isMem → isMember
//   c     → cost
//
// COMMIT 2 — Replace magic numbers with named constants
//   0.5  → RATE_PER_KG
//   10   → PRIORITY_SURCHARGE
//   0.9  → MEMBER_DISCOUNT_MULTIPLIER
//   5    → MIN_SHIPPING
//   50   → OVERWEIGHT_THRESHOLD_KG
//   0.25 → OVERWEIGHT_SURCHARGE_PER_KG
//
// COMMIT 3 — Extract Method: zoneMultiplier(zone)
//   Replace the long if/else chain with a single call.
//
// COMMIT 4 — Extract Method: applyMembership(cost, isMember)
//   Pull the member discount out into its own function.
//
// COMMIT 5 — Extract Method: applyOverweightSurcharge(cost, weight)
//   Pull the overweight logic out too.
//
// COMMIT 6 (BONUS) — Introduce Parameter Object
//   Replace the four parameters with a single `shipment` object:
//     { weight, zone, isPriority, isMember }
//
// After each commit: run `node workshop2-shipping-refactor.js`
// and check that ALL TESTS PASSED appears.
//
// If a refactor breaks tests:
//   git reset --hard HEAD       (undo uncommitted changes)
//   git revert HEAD             (undo the most recent commit)
//   ...and try a smaller step.
// =================================================================
