const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      const copyCollection =
        collection instanceof Array
          ? [...collection]
          : Object.values(collection);

      for (let i = 0; i < copyCollection.length; i++) {
        callback(copyCollection[i]);
      }

      return collection;
    },

    map: function (collection, callback) {
      const copyCollection =
        collection instanceof Array
          ? [...collection]
          : Object.values(collection);

      for (let i = 0; i < copyCollection.length; i++) {
        copyCollection[i] = callback(copyCollection[i]);
      }

      return copyCollection;
    },

    reduce: function (collection, callback, accumulator) {
      const copyCollection =
        collection instanceof Array
          ? [...collection]
          : Object.values(collection);

      if (accumulator === undefined) {
        accumulator = copyCollection[0];
        for (let i = 1; i < copyCollection.length; i++) {
          accumulator = callback(accumulator, copyCollection[i]);
        }
        return accumulator;
      } else {
        for (const el of copyCollection) {
          accumulator = callback(accumulator, el);
        }
        return accumulator;
      }
    },

    find: function (collection, predicate) {
      const copyCollection =
        collection instanceof Array
          ? [...collection]
          : Object.values(collection);
      let len = copyCollection.length;
      let k = 0;
      while (k < len) {
        if (predicate(copyCollection[k])) {
          return copyCollection[k];
        }
        k++;
      }
      return undefined;
    },

    filter: function (collection, predicate) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }

      return newArray;
    },

    size: function (collection) {
      const copyCollection =
        collection instanceof Array
          ? [...collection]
          : Object.values(collection);
      let i = 0;
      for (let el of copyCollection) {
        i++;
      }
      return i;
    },

    first: function (collection, n) {
      let newArray = [];
      if (n === undefined) {
        return collection[0];
      } else {
        for (let index = 0; index < n; index++) {
          newArray.push(collection[index]);
        }
      }
      return newArray;
    },

    last: function (collection, n) {
      let copy = [...collection];
      let newArray = [];
      if (n === undefined) {
        return copy.pop();
      } else {
        for (let index = 0; index < n; index++) {
          let k = copy.pop();
          newArray.push(k);
        }
      }
      return newArray.reverse();
    },
    compact: function (collection) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          newArray.push(collection[i]);
        }
      }

      return newArray;
    },
    sortBy: function (array, callback) {
      let copy = [...array];
      return copy.sort((a, b) => callback(a) - callback(b));
    },
    flatten: function (arr, d = Infinity) {
      return d > 0
        ? arr.reduce(
            (acc, val) =>
              acc.concat(Array.isArray(val) ? this.flatten(val, d - 1) : val),
            []
          )
        : arr.slice();
    },
    uniq: function (arr, isSorted, callback) {
      let unique = [];
      for (var i = 0, l = arr.length; i < l; i++)
        if (unique.indexOf(arr[i]) === -1 && arr[i] !== "") unique.push(arr[i]);
      return unique;
    },
    keys: function (obj) {
      const keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      return keys;
    },
    values: function (obj) {
      const values = [];
      for (let key in obj) {
        values.push(obj[key]);
      }
      return values;
    },
    functions: function (obj) {
      const functionKeys = [];

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionKeys.push(key);
        }
      }
      return functionKeys.sort();
    },
  };
})();

console.log(fi.uniq([1, 1, 2, 3, 2, 4, 5, 6, 1], false, (val) => val % 3));

fi.libraryMethod();
