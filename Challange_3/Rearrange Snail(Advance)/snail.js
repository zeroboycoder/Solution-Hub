// Two D array to Snail Form
const snail = (arr) => {
   let array = [...arr];
   const snailSort = [];
   while (array.length > 0) {
      snailSort.push(...array.shift());
      for (let j = 0; j < array.length; j++) {
         snailSort.push(array[j].pop());
      }
      snailSort.push(...(array.pop() || []).reverse());
      for (let k = array.length - 1; k > 0; k--) {
         snailSort.push(array[k].shift());
      }
   }
   return snailSort;
};

// Convert array to Snail array
const reverseSnail = (array) => {
   const n = Math.sqrt(array.length);
   const reverseSnailArr = [];
   for (let i = 0; i < n; i++) {
      reverseSnailArr.push(array.shift());
   }
   let popValue = [];
   for (let j = 0; j < n - 1; j++) {
      popValue.push(array.pop());
   }
   reverseSnailArr.push(...popValue.reverse());
   reverseSnailArr.push(array.shift());
   reverseSnailArr.push(...array.reverse());
   return reverseSnailArr;
};

// Reverse the array
const reverseArray = (array) => {
   return array.reverse();
};

// Conver oridinary array Two D Array
const convertTwoDArray = (array) => {
   let n = Math.sqrt(array.length);
   const reArrange = [];
   for (let i = 0; i < n; i++) {
      let tempArr = [];
      for (let j = 0; j < n; j++) {
         tempArr.push(array.shift());
      }
      reArrange.push(tempArr);
   }
   return reArrange;
};

// Rearrange the array from Two D oridary array to Two D rearrange snail array
const rearranged_array = (array) => {
   const testArr = [];
   if (array.length === 1) {
      return "Cannot access this array form. Please use Two D array";
   }
   for (let i = 0; i < array.length; i++) {
      testArr.push(...array[i]);
   }
   const n = Math.sqrt(testArr.length);
   if (testArr.length % n !== 0) {
      return "Please use n*n form.";
   }
   return convertTwoDArray(reverseSnail(reverseArray(snail(array))));
};

// Call the array
console.log(
   rearranged_array([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
   ])
);

