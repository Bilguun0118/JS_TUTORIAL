// For loop structure


for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// 5 4 3 2 1 0


for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]


//Массив дахь бүх элементүүдийг нэмж байна
const numbers = [1, 2, 3, 4, 5]
let sumAdd = 0
for (let i = 0; i < numbers.length; i++) {
    sumAdd = sumAdd + numbers[i] // can be shorten, sum += numbers[i]

}

console.log(sum) // 15

//Одоо байгаа массив дээр үндэслэн шинэ массив үүсгэж байна
const numbersNew = [1, 2, 3, 4, 5]
const newArray = []
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] ** 2)

}

console.log(newArray) // [1, 4, 9, 16, 25]


const countriesNew = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArrayCount = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}

console.log(newArrayCount) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]