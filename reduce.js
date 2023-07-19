function reduceArray(nums, fn, init) {
    let accumulator = init;
    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }
    return accumulator;
}

// Example 1: Sum all elements in the array
const nums = [1, 2, 3, 4, 5];
const sum = reduceArray(nums, (acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 2: Calculate the product of all elements in the array
const product = reduceArray(nums, (acc, curr) => acc * curr, 1);
console.log(product); // Output: 120 (1 * 2 * 3 * 4 * 5)
