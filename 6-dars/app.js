// Mantiqiy operatorlar
// && - AND operatori
// || - OR operatori
// ! - NOT operatori

// // && barcha shart to'g'ri bo'lsa TRUE qaytaradi

// let yosh = 20, pull = true;
// console.log(yosh > 18 && pull); // true

// let yoshKichik = 15, pul = 0;
// console.log(yoshKichik > 18 && pul); // false

// || shartlardan biri to'g'ri bo'lsa TRUE qaytaradi

// ! NOT operatori qiymatni teskarisiga o'zgartiradi

// // JavaScript-da "truthy" va "falsy" tushunchalari bor.
// // Falsy qiymatlar: false, 0, "", null, undefined, NaN
// // Boshqa har qanday qiymat "truthy" hisoblanadi. Bunga manfiy sonlar ham kiradi.

// console.log(!true); // false
// console.log(!0); // true (chunki 0 - falsy)

// // Sizning savolingizga kelsak: nega !-1 -> false?
// // 1. JavaScript -1 ni tekshiradi. -1 "falsy" qiymatlar ro'yxatida yo'q. Demak, u "truthy" qiymat.
// // 2. "truthy" qiymat boolean `true` ga teng deb olinadi.
// // 3. ! operatori `true` ni `false` ga o'zgartiradi.

console.log(Boolean(-1)); // true
console.log(!-1); // false
console.log(!1); // false (1 ham truthy)
console.log(!50); // false (50 ham truthy)