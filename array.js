// 1️⃣ map() – Transforming data
// 🔴 Problem

// You have data, but you need it in a new format.

// 🌍 Real-life example

// You have a list of product prices and want to add VAT to each.

// ✅ Solution
const prices = [100, 200, 300];

const pricesWithVAT = prices.map(price => price * 1.15);

console.log(pricesWithVAT); // [115, 230, 345]


// 👉 Real life: Like adding tax to every bill automatically.