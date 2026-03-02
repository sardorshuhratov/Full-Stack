// + (string bn) -> string concatenation
// - * / -> hardoim number
// true -> 1
// false -> 0
// null -> 0
// undifined -> NaN (Not a NUmber)
// Boolean() -> bo`sh bo'lgan matn bolsa true aks xolda false
// Number() -> Stringni songa o'tkazadi
// String() -> Numberni matnga o'tkazadi
// prompt -> Foydalanuvchidan ma'lumot oladi
// Math.abs() -> Manfiyni olib tashlaydi
// .toFixed(2) -> ikki o'nlik raqamni ifodalaydi
// parseInt() -> butun son Stringni o'zgartiradi
// parseFloat() -> kasr son stringni o'zgartiradi

// 1. Coercion (Avtomatik o'zgarish)
// Sonni matnga o'zgartirish

// let natija = "5" + 2;
// console.log(natija)

// let natija2 = "10" - 2;
// console.log(natija2)

// let natija3 = "10" * 2;
// console.log(natija3)

// let natija4 = "10" / 2;
// console.log(natija4)

// // 2. Conversion (Qo'lda o'zgarish)

// let matn = "123";
// let son = Number(matn);
// console.log(son + 50)

// // Sonni matnga o'zgartirish

// let son2 = 456;
// let matn2 = String(son2);
// console.log(matn2) 

// Practise

// //1.
// console.log("5" + 5); // 55
// console.log("5" - 5); // 0
// console.log("5" * "2"); // 10
// console.log("10" / 2);  // 5
// console.log(true + 5);  // 6
// console.log("10" - true);  // 9
// console.log("5" + true);  // 5true
// console.log(null + 5);     // 5
// console.log(undefined + 5); // NaN

// // 2.
// let matn = "200";
// console.log(+matn + 50); // 250

// let son2 = 25;
// let matn2 = String(son2);
// console.log(matn2 + "yosh") // 25yosh

// let a = "false";
// let b = Boolean(a);
// console.log(b) // true

// // Boshqa usul: !! (Double NOT) operatori
// console.log(!!a); // true

// console.log("10" - true) // 9

// let matn5 = "200";
// console.log(parseInt(matn) + 50); // Natija: 250

// let matn6 = "200";
// console.log(+matn6 + 50)

// Homework

const prompt = require("prompt-sync")();
const celsius = Number(prompt("Celsiusni kiriting: "));

// const celsius = 20; 
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(celsius);
console.log(fahrenheit);