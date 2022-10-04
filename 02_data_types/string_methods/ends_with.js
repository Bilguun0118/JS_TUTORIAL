// endsWith: энэ нь дэд мөрийг аргумент болгон авч мөр нь тухайн дэд тэмдэгтээр эхэлж байгаа эсэхийг шалгадаг. Энэ нь логик (үнэн эсвэл худал) утгыг буцаана.
// string.endsWith(substring)

let string = 'love in the best to in the world'
console.log(string.endsWith('world'));
console.log(string.endsWith('love'));
console.log(string.endsWith('in the world'));

let country = 'Finland'
console.log(country.endsWith('land'));
console.log(country.endsWith('fin'));
console.log(country.endsWith('Fin'));