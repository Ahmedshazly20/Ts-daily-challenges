

const arr = [1, -4, 7, 12];

function positiveSum(arr) {

    newArr = arr.filter(num => num > 0);
    const sumsq = newArr.reduce((acc, curr) => acc + curr, 0);
    return sumsq;

}