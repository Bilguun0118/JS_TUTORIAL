// Өөр өөр төрлийн өгөгдлийн янз бүрийн хувьсагчдыг зарлах
let space = ' '
let firstName = 'Bilguun'
let lastName = 'Tumurbaatar'
let country = 'Mongolia'
let city = 'Ulaanbaatar'
let language = 'JavaScript'
let job = 'Studing'
let age = 23
// Нэмэх оператор ашиглан холбох
let fullName = lastName + space + firstName;
console.log(fullName);

let personInfoOne = fullName + ". I'm " + age + ". I live in " + country
console.log(personInfoOne);

// Холболт: Загварын утга (загвар мөр)
let personInfoTwo = `I am ${fullName}. I am ${age}, I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}`
console.log(personInfoTwo);
console.log(personInfoThree);