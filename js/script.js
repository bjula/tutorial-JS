// const yearOfBirth = 2006;

// // Если переменная объявлена как const, перезаписать ее значение нельзя.
// // При попытке присвоить новое значение будешь ошибка выполнения скрипта.
// // yearOfBirth = 2020; // ❌ Неправильно, будет ошибка

// console.log(yearOfBirth);

// let age;

// age = 15;

// console.log(age);  // Если переменной объявленной как let изначально не присвоено значение,
// // она инициализируется специальным значением undefined (не определено).  //undefined

// blok - 1; task 4/36:
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = pricePerItem += 1500;
// console.log(productName); // Repair droid
// console.log(pricePerItem); // 3500


// blok - 1; task 5/36:
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits.`
// console.log(message); //You picked Droid, price per item is 3500 credits.

// // blok - 1; task 6/36:
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message); //You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price.

// // blok - 1; task 7/36: Функция:
// function sayHi(){console.log("Hello, this is my first function!")};
// sayHi();// Hello, this is my first function!

// // blok - 1; task 8/36:
// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// blok - 1; task 9/36:
// function add(a, b, c) {
// return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10)); // 52
// console.log(add(10, 20, 30)); //60
// console.log(add(5, 10, 15)); // 30

// // blok - 1; task 10/36:
// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//    console.log(message)
//   return message;
// };

// // blok - 1; task 12/36:
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     console.log(message)
//     return message;
// };

// // blok - 1; task 13/36:
// function isAdult(age) {
//   const passed = (age >= 18);
//   console.log(passed);
//   return passed;
// }

// blok - 1; task 14/36:
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = (SAVED_PASSWORD === password);
//   return isMatch;
// };

// blok - 1; task 15/36:
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//    message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   console.log(message);
//   return message;
// }


// Сложение чисел с плавающей точкой!!!!
// Еще один способ - сложить, а результат отсечь до определённого знака после запятой при помощи метода toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41


// Методы строки toLowerCase() и toUpperCase():
// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false
// // Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию»
// // введённой пользователем строки, то есть преобразовать все её символы в
// // верхний или нижний регистр.Методы строки toLowerCase() и toUpperCase()
// // вернут новую строку в соответствующем регистре, не изменяя оригинальную.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true





