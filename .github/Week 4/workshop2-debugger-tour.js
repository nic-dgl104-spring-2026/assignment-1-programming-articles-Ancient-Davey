// workshop2-debugger-tour.js
// =================================================================
// DGL104 Week 4 — WORKSHOP 2 (10 minutes)
// -----------------------------------------------------------------
// Goal: USE THE DEBUGGER. No print statements allowed.
//
// This function builds a shopping cart total with a discount code.
// It has a single, subtle bug. Your job is to find it using the
// VS Code debugger.
//
// HOW TO RUN (in VS Code):
//   1. Open this file in VS Code.
//   2. Click the line number gutter at line 28 (the function entry).
//      A red dot appears: that's a breakpoint.
//   3. Press F5 to start debugging. Choose "Node.js" if prompted.
//   4. Execution pauses at line 28.
//   5. Use F10 (Step Over) to advance one line at a time.
//   6. Watch the variables in the Run and Debug panel on the left.
//   7. Find where reality diverges from your expectations.
//
// HOW TO RUN (Chrome DevTools, if you don't have Node debugging set up):
//   - Paste the function into the Chrome DevTools Console.
//   - Add the keyword `debugger;` on the line before `let total = 0;`
//   - Call the function from the console.
//   - The debugger pauses there. Use the Sources tab to step.
// =================================================================

function applyDiscountCode(cart, code) {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }

  let discount = 0;
  if (code === "SUMMER10") {
    discount = total * 0.10;
  } else if (code === "VIP25") {
    discount = total * 0.25;
  }

  return total - discount;
}


// ---- TESTS -----------------------------------------------------

const cart = [
  { name: "Notebook",  price: 8.50, quantity: 2 },
  { name: "Pen pack",  price: 3.00, quantity: 4 },
  { name: "Eraser",    price: 1.25, quantity: 1 }
];

console.log("\nCart subtotal should be: $30.25");
console.log("");
console.log("No code (should be 30.25):     $" + applyDiscountCode(cart, ""));
console.log("'SUMMER10' (should be 27.225): $" + applyDiscountCode(cart, "SUMMER10"));
console.log("'VIP25' (should be 22.6875):   $" + applyDiscountCode(cart, "VIP25"));
console.log("'INVALID' (should be 30.25):   $" + applyDiscountCode(cart, "INVALID"));
console.log("");


// =================================================================
// WHAT TO DO
// -----------------------------------------------------------------
//
//   1. Run the file without debugging first. Read the output.
//      Which test case behaves strangely?
//
//   2. Set a breakpoint INSIDE the function. Step through with F10.
//      Watch the variable `code` and the variable `discount`.
//
//   3. The bug is a SINGLE CHARACTER. Once you spot it, fix it.
//
//   4. Re-run. All four outputs should now match the expected values.
//
// =================================================================
// HINT (peek only if stuck after 5 minutes!)
// -----------------------------------------------------------------
//
//   In JavaScript:
//     ==   is the loose equality operator
//     ===  is the strict equality operator
//     =    is ASSIGNMENT
//
//   What does  if (code = "SUMMER10")  actually do?
//
// =================================================================
//
// REFLECTION (write in your journal):
//
//   - What did you see in the Watch panel that pointed to the bug?
//   - Could you have found this with print statements? How long
//     would it have taken?
//   - Are there other places in your own code where you've used =
//     instead of === ? (It happens to everyone.)
// =================================================================
