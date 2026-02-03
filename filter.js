// 2️⃣ filter() – Selecting specific items
// 🔴 Problem

// You only want items that match a condition.

// 🌍 Real-life example

// From all students, get only passed students.

// ✅ Solution
const marks = [45, 78, 90, 32, 60];

const passed = marks.filter(mark => mark >= 50);

console.log(passed); // [78, 90, 60]


// 👉 Real life: Teacher filtering students who passed the exam.