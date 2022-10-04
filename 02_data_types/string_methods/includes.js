// includes(): Энэ нь дэд мөрийн аргументыг авч, мөрөнд дэд мөрийн аргумент байгаа эсэхийг шалгана. includes() нь логик буцаана. Энэ нь мөрөнд дэд мөр байгаа эсэхийг шалгадаг бөгөөд хэрэв байгаа бол үнэн, байхгүй бол худал гэж буцаана.
let string = 'Made In Mongolia Hero'
console.log(string.includes('Made'));
console.log(string.includes('made'));
console.log(string.includes('Mongolia'));
console.log(string.includes('mongolia'));
console.log(string.includes('Hero'));
console.log(string.includes('hero'));

let county = "Mongolia"
console.log(county.includes("mong"));
console.log(county.includes("Mong"));
console.log(county.includes("Mongolia"));
console.log(county.includes("olia"));