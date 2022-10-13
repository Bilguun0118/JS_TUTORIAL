//1. Хэрэглэгчээс гурвалжны суурь ба өндрийг оруулж, гурвалжны талбайг тооцоолохыг шаарддаг скрипт бичнэ үү (талбай = 0.5 x b x h).
let h = 10
let base = 20

sum = 0.5 * h * base
console.log("гурвалжны талбай = ", sum);

//2. Хэрэглэгчээс гурвалжны а, b тал, в талыг оруулах, гурвалжны периметрийг тооцоолох (периметр = a + b + c) скрипт бичнэ үү.
let a = 5
let b = 4
let c = 3
perimeter= a + b + c
console.log("талыг оруулах =", perimeter);

//3. Мэдээллийг ашиглан урт, өргөнийг авч, тэгш өнцөгтийн талбайг тооцоол (талбай = урт x өргөн ба тэгш өнцөгтийн периметр (периметр = 2 x (урт + өргөн))
let length = 10
let width = 19
rectangle = 2 * (length + width)

console.log("rectangle = ", rectangle);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

//5.

//6. Налуу нь m = (y2-y1)/(x2-x1). (2, 2) цэг ба (6,10) цэгийн хоорондох налууг ол.
let y = 6
let x = 10

m = (y * 2 - y * 1) / (x * 2 - x * 1)
console.log( "Naluu = ", m);

//7. Дээрх хоёр асуултын налууг харьцуул.

//8. y-ийн утгыг тооцоол (y = x2 + 6x + 9). Янз бүрийн x утгуудыг ашиглаж, ямар х утгыг y 0 болохыг олж мэдээрэй.

//9.Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй. Тухайн хүний ​​цалинг тооцох уу?
let hours = 40
let ratePerHour = 28
let YourWeeklyEarningIs = hours * ratePerHour
console.log("Your weekly earning is = ", YourWeeklyEarningIs);


//11.Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз, та энэ үр дүнг авах ёстой.
let firstName = "Bilguun"
let lastName = "Tumurbaatar"
console.log("length = ", firstName.length , lastName.length);

//10.Хэрэв таны нэр 7-оос их байвал таны нэр урт, харин богино гэж хэлээрэй.
let number = lastName.length
number > 7
  ? console.log(`${number} is a long`)
  : console.log(`${number} is a short`)
number = firstName.length

number > 7
  ? console.log(`${number} is a long`)
  : console.log(`${number} is a short`)

//12. myAge болон yourAge гэсэн хоёр хувьсагчийг зарлаж, тэдгээрт анхны утгууд болон myAge болон yourAge онооно.
let myAge = 250
let yourAge = 25

console.log(`I am ${myAge} years older than you.`);

//13. Хэрэглэгчийн төрсөн оныг авах, хэрэв хэрэглэгч 18 ба түүнээс дээш настай бол тодорхой жил хүлээхийг хэлээгүй бол жолоодохыг зөвшөөрнө үү.
let bobYear = 1995
let johnYear = 2005

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.


let numbers = 2022 - bobYear;
numbers > 18
  ? console.log(`You are ${numbers}. You are old enough to drive`)
  : console.log(`${numbers}. You will be allowed to drive after ${18 - numbers} years.`)
numbers = 2022 - johnYear

numbers > 18
? console.log(`You are ${numbers}. You are old enough to drive`)
: console.log(`${numbers}. You will be allowed to drive after ${18 - numbers} years.`)

//14. Хэрэглэгчээс жилийн тоог оруулахыг хүссэн скрипт бичнэ үү. Хүн хэдэн секунд амьдрах боломжтойг тооцоол. Зарим нэг нь зуун жил амьдардаг гэж бодъё
let allSec = prompt("nasaa oruulna uu?", "number" )
let sec = allSec * 31536000
console.log(sec);

//15. Date time объектыг ашиглан хүн унших боломжтой цагийн форматыг үүсгэ
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
const hour = now.getHours()
const min = now.getMinutes()


console.log(`${year}-${month}-${day} ${hour}:${min}`);
console.log(`${day}-${month}-${year} ${hour}:${min}`);

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

//level-3  1.Date time объектыг ашиглан хүн унших боломжтой цагийн форматыг үүсгэ. Цаг, минут нь хоёр оронтой байх ёстой (7 цаг 07, 5 минут нь 05 байх ёстой)
if(hour < 10){
    hour = "0"+hour
}
if(min < 10) {
    min = "0"+ min
};
if(sec < 10){
    sec = "0"+sec
}
console.log(`${year}-${month}-${day} ${hour}:${min}`);
console.log(`${day}-${month}-${year} ${hour}:${min}`);



// if (hours   < 10) {hours   = "0"+hours;}
//     if (minutes < 10) {minutes = "0"+minutes;}
//     if (seconds < 10) {seconds = "0"+seconds;}
//     return hours+':'+minutes+':'+seconds;