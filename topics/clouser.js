// Closure হলো →
// একটি function তার outer scope-এর variable মনে রাখে, এমনকি outer function শেষ হয়ে গেলেও।
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const inc = counter();
inc(); // 1
inc(); // 2
