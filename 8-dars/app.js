// Loop -> For Loop, While Loop, Do While Loop

// For Loop

// // 1
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // 2.
// for (let i = 0; i < 5; i++) {
//     console.log("Raqam: " + i);
// }

// // 3.
// for (let i = 1; i <= 3; i++) {
//     console.log("Soniyalar: " + i);
// }

// 4.
// for (let i = 2; i <= 10; i += 2) {
//     console.log("Juft sonlar: " + i);
// }

// // 5.
// let fruits = ["Olma", "Banan", "Apelsin", "Anor"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log("Meva: " + fruits[i]);
// }

// While loop

// // 6.
// let i = 1;
// while (i <=5) {
//     console.log("Son: " + i);
//     i++;
// }

// // 7
// let sum = 0, i = 1;
// while (i <= 10) {
//     sum += i; // sum = sum + i
//     i++;
// }
// console.log("1 dan 10 gacha bo'lgan sonlarning yig'indisi: " + sum);

// // 8.
// let count = 10;
// while (count > 0) {
//     console.log("Countdown: " + count);
//     count--;
// }

// // 9.
// let num = 2;
// while (num <= 25) {
//     console.log("2 ning darajalari: " + num);
//     num *= 2; // num = num * 2
// }
// console.log("2 ning darajalari 25 dan katta bo'lganda to'xtaydi.");

// Do While Loop

// // 10.
// let i = 1;
// do {
//     console.log("Son: " + i);
//     i++;
// } while (i <= 5);   

// // 11.
// let sum = 0, j = 1;
// do {
//     sum += j;
//     j++;
// } while (j <= 10);

// contune va break

// // 12.
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log("Son: " + i);
//  // i 3 ga teng bo'lsa, keyingi kodni o'tkazib yuboradi
// }

// // 13
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log("Son: " + i);
// }

// // 14.
// let fruits = ["Olma", "Banan", "Apelsin", "Anor"];
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Banan") {
//         continue;
//     }
//     console.log("Meva: " + fruits[i]);  
// }

// // 15.
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) {
//     continue;
//     }
//     console.log("Toq son: " + i);
// }

