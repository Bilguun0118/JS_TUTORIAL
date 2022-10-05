//1. "Хайр бол энэ дэлхийн хамгийн сайхан зүйл. Зарим нь хайраа олсон бол зарим нь хайраа хайсаар л байна”. Энэ өгүүлбэр дэх хайрын үгийн тоог тоол.
let string = "Хайр бол энэ дэлхийн хамгийн сайхан зүйл. Зарим нь хайраа олсон бол зарим нь хайраа хайсаар л байна"
let love = /хайр/gi
console.log(string.match(love));

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//2.Дараах өгүүлбэрт байгаа бүхний тоог тооцоолохын тулд match()-г ашиглана уу: "Та өгүүлбэрийг учир нь учир нь холбоосоор төгсгөж болохгүй"
let stringBec = "2022You cannot end a sentence with 2320 because because because is a conjunction"
let regEx = /\d/g 
console.log(stringBec.match(/\d+/g));

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//3. Дараах текстийг цэвэрлэж, хамгийн их тохиолддог үгийг олоорой (зөвлөгөө, солих, тогтмол хэллэг ашиглах).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//4. Дараах бичвэрээс тоо гаргаж тухайн хүний ​​жилийн нийт орлогыг тооцоол. "Тэр сард 5000 еврогийн цалин, жилийн 10000 еврогийн урамшуулал, сард 15000 еврогийн онлайн сургалтаас авдаг."
let total = "Тэр сард 5000 еврогийн цалин, жилийн 10000 еврогийн урамшуулал, сард 15000 еврогийн онлайн сургалтаас авдаг."
let arr = total.match(/\d+/g)
let sum = (+arr[0] + +arr[2]) * 12 + +arr[1];

console.log(sum);