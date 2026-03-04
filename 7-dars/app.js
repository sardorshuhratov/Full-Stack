// 1.

// let soat = 15;
// let salomlash;
// if (soat < 18) {
//     salomlash = "Assalomu alaykum";
// } else {
//     salomlash = "Xayrli kech";
// }
// console.log(salomlash);

// // 2.
// let yosh = 20;
// let xabar = "Haydashingiz mumkin";
// if (yosh >= 18) {
//     xabar = "Haydashingiz mumkin";
// } else {
//     xabar = "Haydashingiz mumkin emas";
// }
// console.log(xabar);

// // 3.
// let yosh = 16;
// let mamlakat = "UZB";
// let matn = "Haydashingiz mumkin";

// if (mamlakat === "UZB") {
//     if (yosh >= 18) {
//         matn = "Haydashingiz mumkin";
//     }
// }
// console.log(matn);

// // 4.
// let yosh = 16;
// let mamlakat = "UZB";
// let matn = "Haydashingiz mumkin emas";

// if (mamlakat === "UZB" && yosh >= 18) {
//     matn = "Haydashingiz mumkin";
// }
// console.log(matn);

// // 5.
// let soat = new Date().getHours();
// let salomlash;
// if (soat < 12) {
//     salomlash = "Assalomu alaykum"; 
// } else {
//     salomlash = "Xayrli kech";
// }
// console.log(salomlash);

// // 6.
// let vaqt = new Date().getHours();
// let salomlashish;
// if (vaqt < 10) {
//     salomlashish = "Assalomu alaykum";
// } else if (vaqt < 20) {
//     salomlashish = "Xayrli kun";
// } else {
//     salomlashish = "Xayrli kech";
// }
// console.log(salomlashish);

// // 7.
// let yosh = 20;
// let matn = (yosh >= 18) ? "Kattaklar" : "Yoshlar";
// console.log(matn);

// // 8.
// let son = 7;
// let tur = (son % 2 === 0) ? "Juft" : "Toq";
// console.log(tur);

// // 9.
// let summa = 15000;
// let chegirma = (summa > 10000) ? 0.1 : 0;
// let tolov = summa - (summa * chegirma);
// console.log(tolov);

// // 10.
// let ball = 85;
// let baho = (ball >= 90) ? "A" :
//             (ball >= 80) ? "B" :
//             (ball >= 70) ? "C" :
//             (ball >= 60) ? "D" : "F";
// console.log(baho);

// // 11.
// let x = 2;
// switch (x) {
//     case 1:
//         console.log("Son 1 ga teng");
//         break;
//     case 2:
//         console.log("Son 2 ga teng");
//         // break;
//     case 3:
//         console.log("Son 3 ga teng");
//         break;
//     case 4:
//         console.log("Son 4 ga teng");
//         break;
//     case 5:
//         console.log("Son 5 ga teng");
//         break;
//     default:
//         console.log("Bunday son yo'q");
// }

// // 12.
// let matn;
// switch (new Date().getDay()) {
//     case 0:
//         matn = "Bugun Yakshanba";   
//         break;
//     case 1:
//         matn = "Bugun Dushanba";
//         break;
//     case 2:
//         matn = "Bugun Seshanba";
//         break;
//     case 3:
//         matn = "Bugun Chorshanba";
//         break;
//     case 4:
//         matn = "Bugun Payshanba";
//         break;
//     case 5:
//         matn = "Bugun Juma";
//         break;
//     case 6:
//         matn = "Bugun Shanba";
//         break;
// }
// console.log(matn);

// // 13.
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(-1)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("Hello")); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false 
// console.log(Boolean(NaN)); // false 
// console.log(Boolean(10 > 9)); // true
// console.log(Boolean(5 === 5)); // true

// Practice
// // 1.
// let yosh = 20;
// if (yosh >= 18) {
//     console.log("Ovoz bera olasiz");
// } else {
//     console.log("Ovoz bera olmaysiz");
// }

// // 2.
// let ball = 72;
// if (ball >= 90) {
//     console.log("A");
// } else if (ball >= 75) {
//     console.log("B");
// } else if (ball >= 60) {
//     console.log("C");
// } else {
//     console.log("D");
// }

// // 3.
// fasl = "Yoz";
// switch (fasl) {
//     case "Bahor":
//         console.log("Gullar ochiladi");
//         break;
//     case "Yoz":
//         console.log("Issiq kun");
//         break;
//     case "Kuz":
//         console.log("Barglar tushadi");
//         break;
//     case "Qish":
//         console.log("Qor yogadi");
//         break;
//     default:
//         console.log("No'malum fasl");
// }

// // 4.
// let son = (14 % 2 === 0) ? "Juft" : "Toq";
// console.log(son);

// // 5.
// let narx = 50000;
// let chegirmaChegara = 100000;
// let chegirma = Boolean(narx > chegirmaChegara) ? "Chegirma bor" : "Chegirma yo'q";
// console.log(chegirma);

