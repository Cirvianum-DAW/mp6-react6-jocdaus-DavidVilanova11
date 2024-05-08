// Una funció per obtenir un nombre aleatori entre 1 i 6

function dau6() {
  return Math.floor(Math.random() * 6) + 1;
}

function getTirades(n) {
  return [...Array(n)].map(() => dau6());
}

function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

export { dau6, getTirades, sum };