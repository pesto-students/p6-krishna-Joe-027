const add = (...args) => args.reduce((a, b) => a + b);

function memoize(fn) {
  const cache = new Map();
  return function (...rest) {
    const key = rest.toString();
    if (cache.has(key)) {
      console.log("Got it in cache");
      return cache.get(key);
    }
    cache.set(key, fn(...rest));
    console.log("Did not get it in cache");
    return cache.get(key);
  };
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(100, 100));
console.log(memoizedAdd(100));
console.log(memoizedAdd(100, 200));
console.log(memoizedAdd(100, 100));