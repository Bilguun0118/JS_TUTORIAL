// startsWith: энэ нь дэд мөрийг аргумент болгон авч мөр нь тухайн дэд тэмдэгтээр ЭХЭЛЖ байгаа эсэхийг шалгадаг. Энэ нь логик (үнэн эсвэл худал) утгыг буцаана.
// string.startsWith(substring)

let string = 'Love is the best to in this world'
console.log(string.startsWith("love"));
console.log(string.startsWith("Love"));
console.log(string.startsWith("best"));

let city = "Ulaanbaatar"
console.log(city.startsWith("Ulaan"));
console.log(city.startsWith("baatar"));
console.log(city.startsWith("ulaan"));