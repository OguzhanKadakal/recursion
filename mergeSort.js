function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(firstHalf, secondHalf) {
  const sortedArray = [];

  while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] <= secondHalf[0]) {
      sortedArray.push(firstHalf.shift());
    } else {
      sortedArray.push(secondHalf.shift());
    }
  }

  return [...sortedArray, ...firstHalf, ...secondHalf];
}

const numbers = [5, -3, 2, 111, 0, 91, -26];
console.log(mergeSort(numbers));
