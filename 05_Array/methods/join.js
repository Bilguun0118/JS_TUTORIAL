//join: Энэ нь массивын элементүүдийг холбоход хэрэглэгддэг бөгөөд нэгдэх аргад бидний дамжуулсан аргумент массив дотор нэгдэж, стринг хэлбэрээр буцаана.
//Анхдагч байдлаар, энэ нь таслалаар нийлдэг, гэхдээ бид зүйлсийн хооронд нэгдэж болох өөр өөр мөр параметрийг дамжуулж болно.


const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ] // List of web technologies

console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"