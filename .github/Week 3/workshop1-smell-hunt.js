// workshop1-smell-hunt.js
// =================================================================
// DGL104 Week 3 — WORKSHOP 1 (20 minutes)
// -----------------------------------------------------------------
// Goal: identify code smells. DON'T refactor yet — just FIND them.
//
// This function processes an order and prints a receipt.
// It works. Tests pass. Your job: list every smell you can find.
//
// Hint: there are at least SIX named smells from the lecture.
// Bonus: any smell from Refactoring.com counts too.
// =================================================================

function p(o) {
  let t = 0;
  let txt = "";
  txt = txt + "RECEIPT\n";
  txt = txt + "--------\n";
  txt = txt + "Customer: " + o.c.n + "\n";
  txt = txt + "Email: " + o.c.e + "\n";
  txt = txt + "Address: " + o.c.a + "\n";
  txt = txt + "--------\n";
  for (let i = 0; i < o.items.length; i++) {
    let item = o.items[i];
    let lt = item.q * item.pr;
    if (item.d) {
      lt = lt * (1 - item.d);
    }
    if (item.q >= 10) {
      lt = lt * 0.95;
    }
    if (o.c.vip === true) {
      lt = lt * 0.9;
    }
    t = t + lt;
    txt = txt + item.n + " x" + item.q + " @ $" + item.pr + " = $" + lt.toFixed(2) + "\n";
  }
  txt = txt + "--------\n";
  let tax = t * 0.12;
  let tot = t + tax;
  if (o.c.country === "CA" && o.c.province === "BC") {
    tax = t * 0.12;
    tot = t + tax;
  } else if (o.c.country === "CA" && o.c.province === "ON") {
    tax = t * 0.13;
    tot = t + tax;
  } else if (o.c.country === "CA" && o.c.province === "AB") {
    tax = t * 0.05;
    tot = t + tax;
  } else {
    tax = 0;
    tot = t;
  }
  txt = txt + "Subtotal: $" + t.toFixed(2) + "\n";
  txt = txt + "Tax: $" + tax.toFixed(2) + "\n";
  txt = txt + "TOTAL: $" + tot.toFixed(2) + "\n";
  if (tot > 100) {
    txt = txt + "*** FREE SHIPPING ***\n";
  }
  console.log(txt);
  return tot;
}

// Sample data to verify it runs:
const sampleOrder = {
  c: { n: "Ada Lovelace", e: "ada@example.com", a: "1 Babbage St", vip: true, country: "CA", province: "BC" },
  items: [
    { n: "Notebook",  q: 2,  pr: 8.50, d: 0    },
    { n: "Pen pack",  q: 12, pr: 3.00, d: 0.10 },
    { n: "Eraser",    q: 1,  pr: 1.25, d: 0    }
  ]
};

p(sampleOrder);

// =================================================================
// YOUR TASK
// -----------------------------------------------------------------
// In your journal (or a comment block below), list every smell
// you can identify. Use the names from Section 4 of the lecture
// reading. For each smell, write ONE sentence on where it lives.
//
// Format:
//   1. <Smell name> — <where in the function>
//   2. <Smell name> — <where in the function>
//   ...
//
// Examples to get you started:
//   1. Poor Naming — function is called `p`, parameter `o`, variable `t`
//   2. Magic Number — 0.12 appears for BC tax, 0.95 for bulk discount, etc.
//
// We'll discuss as a class at the 20-minute mark.
// =================================================================

// Line 18 & 22 -- Poor Naming: The word "--------\n" is way to vague and does not give a clear description on what it does.
// Line 14 -- Poor Naming: "p(o)" does not give a clear description on what it is supposed to be.
// Line 66 -- Long Parameter: List as you can see is a little to long.
// Line 23 to 36 -- Poor Naming: "item.d" and "item.q" are not clear on what the object is.
// Line 19 to 21 -- Poor Naming: "o.c.n", "o.c.a", and "o.c.e" once again are not clear on what they are.
// Line 41 to 53 -- Long Method: The code loops for to long, could maybe split up.


