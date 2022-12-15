//lastIndexOf: Энэ нь массив дахь сүүлчийн зүйлийн байрлалыг өгдөг.Хэрэв байгаа бол индексийг буцаана, эс бөгөөс - 1 - ийг буцаана.


const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1