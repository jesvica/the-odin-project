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