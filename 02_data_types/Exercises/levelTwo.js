//1. console.log() ашиглан дараах мэдэгдлийг хэвлэнэ үү:
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by bilguun studing us to help one another.`
);

//2. Console.log() ашиглан Тереза ​​эхийн хэлсэн дараах ишлэлийг хэвлэж гарга.
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

//3.Typeof '10' нь 10-тай яг тэнцүү эсэхийг шалгаарай. Хэрэв үгүй ​​бол яг тэнцүү болго.
const num = 10;

console.log(num);
console.log("'10' =", Math.abs("10"));

//4. parseFloat('9.8') 10-тай тэнцүү биш бол 10-тай яг тэнцүү болгох эсэхийг шалгана уу.
console.log("9.8 =", Math.round(9.8));

//5. Питон болон үг хэллэг дээр 'on' байгаа эсэхийг шалгана уу
let string = "Phyton";
console.log("Өгүүлбэрт on үг байгаа эсэхийг шалгана = ", string.includes("on"));

//6. Энэ хичээл нь үг хэллэгээр дүүрэн биш гэж найдаж байна. Өгүүлбэрт үг хэллэг байгаа эсэхийг шалгана уу.
let stringSix = "I hope this course is not full of jargon";
console.log(
  "Өгүүлбэрт  jargon үг байгаа эсэхийг шалгана = ",
  stringSix.endsWith("jargon")
);

//7. 0-ээс 100 хүртэл санамсаргүй тоог үүсгэнэ үү.
let number = 100;
console.log("random number = ", Math.floor(Math.random() * 100));

//8. 0-ээс 255 хүртэлх санамсаргүй тоог үүсгэнэ үү.
console.log("50-aas  random number = ", Math.floor(Math.random() * 100) + 50);

//9.0-ээс 255 хүртэлх санамсаргүй тоог үүсгэнэ үү.
console.log("50-aas  random number = ", Math.floor(Math.random() * 250));

//10. Санамсаргүй тоо ашиглан 'JavaScript' тэмдэгтүүдэд хандана уу.
let stringJS = "JavaScript";
console.log("random temdegt = ", stringJS.charAt(Math.floor(Math.random())));

//11. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
console.log(`\t1 1 1 1 1 \n
    2 1 2 4 8\n
    3 1 3 9 27\n
    4 1 4 16 64\n
    5 1 5 25 125`);

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' 
//(Учир нь дараах өгүүлбэрээс "Та өгүүлбэрийг учир нь учир нь холбоосоор төгсгөж болохгүй" гэсэн өгүүлбэрийг таслахын тулд substr-г ашиглана.)
let stringBecause = "You cannot end a sentence with because because because is a conjunction"
console.log("because = ", stringBecause.substr(30, 8));

