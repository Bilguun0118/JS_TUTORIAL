//slice: Хэсэг доторх олон зүйлийг хасах. Энэ нь хоёр параметрийг шаарддаг: эхлэл ба төгсгөлийн байрлал. Энэ нь төгсгөлийн байрлалыг оруулаагүй болно.

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position