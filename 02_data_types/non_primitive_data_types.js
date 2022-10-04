let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);

let numbers = [1, 2, 3]
console.log(nums == numbers);

let userOne = {
    name: 'Bilguun',
    role: 'Studing',
    country: 'Mongolia'
}

let userTwo = {
    name: 'Bilguun',
    role: 'Studing',
    country: 'Mongolia'
}

console.log(userOne == userTwo);

numbers = nums;
console.log(numbers == nums);

userOne = userTwo;
console.log(numbers == nums);
