const setd = [1, 2, 3, 4, 5, 6, 7];

function fib(max) {
  let a = 0;
  let b = 1;
  let temp = 0;
  const fibArray = [0, 1];
  fibArray.push(a);
  fibArray.push(b);
  for (let i = 2; i < max; i++) {
    temp = b;
    b += a;
    a = temp;
    fibArray.push(b);
  }
  return fibArray;
}


function numsToStrings(arrayofNums) {
  return _.map(arrayofNums, function (numb) { return `${numb}`; });
}

function numEvenNums(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      sum++;
    }
  }
  return sum;
}

console.log(numEvenNums(setd));
console.log(numsToStrings(fib(100)));
