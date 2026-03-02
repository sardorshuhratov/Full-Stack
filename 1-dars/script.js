// // 1. Hosting -> yuqoriga ko`tarish

// console.log(a); // undefined, chunki a o`zgaruvchisi e'lon qilingan, lekin qiymat berilmagan
// var a = 10; 

// console.log(b); // ReferenceError: b is not defined, chunki b o`zgaruvchisi e'lon qilinmagan
// let b = 20;

// // 2. Scope {blok ko`lamida}

// {
//     var c = 30; // var bilan e'lon qilingan o`zgaruvchi blok ko`lamida emas, global scope da mavjud
//     let d = 40; // let bilan e'lon qilingan o`zgaruvchi blok ko`lamida mavjud
// }

// console.log(c); // 30, chunki c global scope da mavjud
// console.log(d); // ReferenceError: d is not defined, chunki d blok ko`lamida mavjud, global scope da emas

// // 3. Qayta  e'lon qilish

// var e = 50; // var bilan e'lon qilingan o`zgaruvchi
// var e = 60; // var bilan qayta e'lon qilish mumkin, e ning qiymati 60 ga o`zgartiriladi
// console.log(e); // 60

// const f = 70; // let bilan e'lon qilingan o`zgaruvchi
// const f = 80; // SyntaxError: Identifier 'f' has already been declared, let bilan qayta e'lon qilish mumkin emas
// console.log(f); // 70, chunki f ning qiymati o`zgartirilmagan

// 4. Qayta qiymat berish

// let a = 10; // let bilan e'lon qilingan o`zgaruvchi
// a = 20;

const b = 30; // const bilan e'lon qilingan o`zgaruvchi
b = 40; // TypeError: Assignment to constant variable, const bilan e'lon qilingan o`zgaruvchiga qayta qiymat berish mumkin emas 

console.log(b); 