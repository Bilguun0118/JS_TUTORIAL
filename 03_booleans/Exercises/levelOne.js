//1. FirstName, LastName, улс, хот, нас, isMarried, year хувьсагчийг зарлаж, түүнд утга оноож, төрөл бүрийн өгөгдлийн төрлийг шалгахдаа typeof операторыг ашиглана уу.
let FirstName = "Bilguun";
let LastName = "Tumurbaatar";
let count = "Mongolia";
let city = "Erdenet";
let age = 27;
let isMarried = true;
let year = 2022;

console.log(typeof FirstName);
console.log(typeof LastName);
console.log(typeof count);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//2. "10"-ын төрөл нь 10-тай тэнцүү эсэхийг шалгана уу
console.log("10 n hoorondoo tentsuu yu =", 10 == "10");

//3.parseInt('9.8') 10-тай тэнцүү эсэхийг шалгана уу
let sum = parseInt("9.8");
console.log(sum);
console.log("parseInt('9.8') n 10 tai tentsuu yu = ", sum == 10);

//4. Boolean value is either true or false.
// i. Үнэний утгыг өгөх гурван JavaScript мэдэгдлийг бич.
let trueOne = 4 > 3;
let myMerry = 4 >= 3;
let hobby = 4 == 4;

console.log(trueOne, myMerry, hobby);

// ii. Хуурамч утга өгөх гурван JavaScript хэллэг бичнэ үү.
let trueTwo = 4 < 3;
let hobbyTennes = 4 <= 3;
let summer = 4 != 4;

console.log(trueTwo, hobbyTennes, summer);

//5. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.

let i = 4 > 3; //true
let ii = 4 >= 3; //true
let iii = 4 < 3; //false
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(i, ii, iii, iv, v, vi, vii, iix, ix, x, xi);

//6. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.

let one = 4 > 3 && 10 < 12; //true (and == болон)
let two = 4 > 3 && 10 > 12; //false (and == болон)
let three = 4 > 3 || 10 < 12; //true (or == эсвэл)
let four = 4 > 3 || 10 > 12; //true (or == эсвэл)
let five = !(4 > 3); //false (not == үгүй)
let six = !(4 < 3); //treu (not == үгүй)
let seven = !false; //true (not == үгүй)
let eight = !(4 > 3 && 10 < 12); //false (not == үгүй) (and == болон)
let nine = !(4 > 3 && 10 > 12); //true (not == үгүй) (and == болон)
let ten = !(4 === "4"); //treu (not == үгүй)
let eleven = "There is no 'on' in both dragon and python";

console.log(
  "6- r t: ",
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten
);

//7. Дараах үйлдлүүдийг хийхийн тулд Date объектыг ашиглана уу

//a What is the year today?
const fullYear = new Date();
console.log("today Year = ", fullYear.getFullYear());
//b. What is the month today as a number?
const month = new Date()
console.log("today month = ", month.getMonth());
//c.What is the date today?
const day = new Date()
console.log("today day = ", day.getDate());
//d. What is the day today as a number?
const dayNum = new Date()
console.log("today num = ", dayNum.getDay());
//e. What is the hours now?
const hour = new Date()
console.log("now hour = ", hour.getHours());
//f. What is the minutes now?
const minutes = new Date()
console.log("now min = ", minutes.getMinutes());
//g. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const unix = new Date()
console.log("unix time = ", unix.getTime());
