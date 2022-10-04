// match: энэ нь аргумент болгон дэд тэмдэгт буюу тогтмол илэрхийллийн загварыг авдаг бөгөөд хэрэв тохирохгүй бол массивыг буцаана, хэрэв энэ нь тэгийг буцаана. Тогтмол илэрхийллийн загвар хэрхэн харагдахыг харцгаая. Энэ нь / тэмдгээр эхэлж / тэмдэгээр төгсдөг.

let string = 'love'
let patternOne = /love/
let patternTwo = /love/gi   // g-бүхэл бүтэн текстээс хайх гэсэн үг, i - жижиг жижиг үсгийн мэдрэмжгүй
console.log(string.match('love'));

let pattern = /love/gi
console.log(string.match(pattern));


// Тогтмол илэрхийлэл ашиглан текстээс тоо гаргаж авцгаая. Энэ бол ердийн илэрхийллийн хэсэг биш.
let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
let regEx = /\d/g   // Escape тэмдэгттэй d d нь хэвийн биш d оронд нь цифр үйлчилнэ



// + нь нэг буюу хэд хэдэн оронтой тоог илэрхийлнэ,
// үүний дараа g байвал глобал гэсэн үг, хаа сайгүй хай.
console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));