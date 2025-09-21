function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function sumOfTripledEvensMap(array) {
    return array
        .map((num) => num * 3)
        .filter((num) => num % 2 !== 0)
        .reduce((num))
}

//Sort an array
let arr = [5, 2, 1, -10, 8];
function sortArray(arr) {
    arr.sort();
    return arr.reverse();
}

console.log(sortArray(arr));

//Copy and sort array
let arr1 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr1) {
    return arr1.toSorted();
}
console.log(copySorted(arr1))

//Shuffle an array
let arr2 = [1,2,3]

function shuffleArray(arr2) {
    for (let j = arr2.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [arr2[j], arr2[k]] = [arr2[k], arr2[j]]
    }
    return arr2;
}

console.log(shuffleArray(arr2))

//Filter unique array members
function unique(arr3) {
  result = [];
   for (let item of arr3) {
    if (!result.includes(item)) {
        result.push(item);
    }
   }
   return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings))