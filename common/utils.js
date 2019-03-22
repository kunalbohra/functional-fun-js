//head :: [a] -> a
const head = ([first]) => first;

//tail :: [a] -> a
const tail = ([_, ...rest]) => rest;

const last = list => list[list.length - 1];

const take = (n, list) => list.slice(0, n);
const drop = (n, list) => list.slice(n);

//curry :: ((a, b) -> c) -> a -> b -> c
const curry = fn => {
  const arity = fn.length;

  return function curried(...remainingArgs) {
    if (remainingArgs.length >= arity) return fn.apply(null, remainingArgs);
    return (...restArgs) =>
      curried.apply(null, [...remainingArgs, ...restArgs]);
  };
};

const compose = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg);

//replicate :: Int -> a -> [a]
const replicate = curry((times, value) =>
  Array.from({ length: times }, (v, i) => value)
);

const getProp = curry((prop, obj) => obj[prop]);

//all :: Foldable t => (a -> Bool) -> t a -> Bool
const all = curry((predicate, list) => list.every(predicate));

//any :: Foldable t => (a -> Bool) -> t a -> Bool
const any = curry((predicate, list) => {
  // console.log('any', list);
  return list.some(predicate);
});

const reverse = list => list.reverse();

const map = curry((f, list) => list.map(f));

const filter = curry((fn, list) => list.filter(fn));

const reduce = curry((fn, init, list) => list.reduce(fn, init));

const flat = list => list.flat();

const listToSet = arr => new Set(arr);

const setToList = set => Array.from(set).sort();

/**
 * @param {string} tag - descriptive text that the value being logged should be associated with
 * @param {any} val - actual value being logged
 * @description a curried function that can be a part of a pipe or compose operation to assist with console debugging
 */
const trace = curry((tag, val) => {
  console.log(`tag ${tag} val ${val}`);
  return val;
});

module.exports = {
  curry,
  compose,
  replicate,
  all,
  reverse,
  map,
  any,
  flat,
  trace,
  last,
  tail,
  head,
  listToSet,
  setToList,
  take,
  drop,
  reduce,
  getProp,
  filter
};
