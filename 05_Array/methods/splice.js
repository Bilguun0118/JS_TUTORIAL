//Splice: Үүнд гурван параметр шаардлагатай: Эхлэх байрлал, хасах хэдэн удаа, нэмэх зүйлсийн тоо.

const numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers) // -> remove all items

const numbers1 = [1, 2, 3, 4, 5]
numbers.splice(0, 1)
console.log(numbers1) // remove the first item

const numbers2 = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers2.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items