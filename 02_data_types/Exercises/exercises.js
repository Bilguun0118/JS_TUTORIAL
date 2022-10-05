let z;
const a = 3;

//2. console.log() ашиглан хөтчийн консол дээрх мөрийг хэвлэнэ үү.
//3. Print the length of the string on the browser console using console.log()
let string = "mongolia"
console.log(string.length);

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(string.toUpperCase());

//5. toLowerCase() аргыг ашиглан бүх тэмдэгтүүдийг жижиг үсгээр солино 
let tolow = 'MONGoLIa'
console.log(tolow.toLowerCase()); 

//6. Substr() эсвэл substring() аргыг ашиглан мөрийн эхний үгийг хайчилж ав
console.log(tolow.substr(0, 1))

//7. JavaScript-н өдрүүдийн 30 өдрийн JavaScript хэллэгийг хайчилж ав.
let day = "30 days of Javascript"
console.log(day.substring(day.length - 10));

//8. Уг мөрөнд скрипт үг байгаа эсэхийг include() аргыг ашиглан шалгана уу

console.log("script baiga eseh : ", day.includes('script'));

//9. split() аргыг ашиглан мөрийг массив болгон хуваа
console.log(day.split(''));

//10.Split() аргыг ашиглан 30 өдрийн JavaScript мөрийг зайд хуваа.
console.log(day.split(" "));

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' нь тэмдэгт мөрийг таслал дээр хувааж, массив болгон өөрчилсөн.
let strings = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(strings.split(", "));

//12. replace() аргыг ашиглан 30 хоногийн JavaScript-г 30 хоногийн Python болгон өөрчил.
console.log(day.replace('Javascript', 'Python'));

//13.'30 Days Of JavaScript' мөрийн 15-р индексийн тэмдэгт юу вэ? charAt() аргыг ашиглана уу.
console.log("15-р индексийн тэмдэгт :", day.charAt(15));

//14.charCodeAt() ашиглан '30 Days Of JavaScript' мөрт J-ийн тэмдэгтийн код гэж юу вэ?
console.log('мөрт J-ийн тэмдэгтийн код :', day.charCodeAt("temdegtiin code : ", 1));

//15. JavaScript-н 30 хоногийн дотор анхны тохиолдлын байрлалыг тодорхойлохын тулд indexOf-г ашиглана уу
console.log(day.indexOf("of"));

//16. JavaScript-н 30 хоногийн дотор хамгийн сүүлд тохиолдох байрлалыг тодорхойлохын тулд lastIndexOf-г ашиглана уу.
console.log(day.lastIndexOf("Javascript"));

//17. Дараах өгүүлбэрт байгаа үгийн эхний тохиолдлын байрлалыг олохын тулд indexOf-г ашиглана: 'Та өгүүлбэрийг учир нь учир нь холбоосоор төгсгөж болохгүй'
let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("You"));

//18. LastIndexOf-г ашиглан дараах өгүүлбэрт хамгийн сүүлд тохиолдсон үгийн байрлалыг олоорой: 'Та өгүүлбэрийг учир нь учир нь холбоосоор төгсгөж болохгүй'
console.log(sentence.lastIndexOf("conjunction"));

//19. Дараах өгүүлбэрт байгаа үгийн эхний тохиолдлын байрлалыг хайж олохын тулд хайлтыг ашиглана уу: 'Та өгүүлбэрийг учир нь учир нь холбоосоор төгсгөж болохгүй'
console.log(sentence.search("You"));

//20. Мөрний эхэн ба төгсгөлд байгаа хоосон зайг арилгахын тулд trim()-г ашиглана уу. Жишээ нь: ' 30 Days Of JavaScript '.
let trim = " hello World "
console.log(trim.trim());

//21. StartsWith() аргыг 30 Days Of JavaScript стринг ашиглан үр дүнг үнэн болго
console.log(day.startsWith("30"));

//22. 30 Days Of JavaScript мөртэй endsWith() аргыг ашиглаад үр дүнг үнэн болго
console.log(day.endsWith("Javascript"));

//23. JavaScript-н 30 хоногийн бүх a-г олохын тулд match() аргыг ашиглана уу
let alla = /\a+/g
console.log(day.match(alla));

//24. concat() ашиглаад '30 Days of' болон 'JavaScript'-г '30 Days Of JavaScript' гэсэн нэг мөр болгон нэгтгэнэ үү.
let singleString = '30 Days of '
console.log(singleString.concat("JavaScript the mongolia"));

//25. 30 хоногийн JavaScript-г 2 удаа хэвлэхийн тулд repeat() аргыг ашиглаарай
console.log(day.repeat(2));