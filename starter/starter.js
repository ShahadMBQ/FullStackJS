const sum = (arr) => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Concatenate two arrays
const concat = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

// Find the largest numder in an array
const lgNum = (arr) => {
  let largest = 0;
  arr.forEach((x) => {
    if (x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from array
const cut3 = (arr) => {
arr.splice(2,1);
return arr;
};


module.exports= {
sum ,
lgNum,
concat,
cut3
};