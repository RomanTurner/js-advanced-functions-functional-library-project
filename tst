
 const x = [
   1,
   0,
   "a",
   "",
   "maru",
   null,
   "choux",
   NaN,
   false,
   "doge",
   undefined,
 ];



const xoxo = function (collection) {
  let newArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i]) {
      newArray.push(collection[i]);
    }
  }

  return newArray;
};



console.log(xoxo(x));
