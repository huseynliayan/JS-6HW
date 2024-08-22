//Task 1
// let sentence = prompt("Enter the string");
// let letters = 0;
// let digits = 0;
// let others = 0;
// const calculation = (string) => {

//   for (const char of string) {
//     if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
//         letters++;
//     } else if (char >= '0' && char <= '9') {
//         digits++;
//     } else {
//         others++;
//     }
// }

// console.log(`Letters: ${letters}`);
// console.log(`Digits: ${digits}`);
// console.log(`Others: ${others}`);
// };

// console.log(calculation(sentence));

// Task 2
// function numberToText(number) {
//   if (number < 10 || number > 99) {
//       return "Число должно быть двузначным!";
//   }

//   const ones = [
//       "", "один", "два", "три", "четыре", "пять",
//       "шесть", "семь", "восемь", "девять"
//   ];
//   const teens = [
//       "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать",
//       "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"
//   ];
//   const tens = [
//       "", "", "двадцать", "тридцать", "сорок",
//       "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"
//   ];

//   if (number < 20) {
//       return teens[number - 10];
//   } else {
//       const tensPart = Math.floor(number / 10);
//       const onesPart = number % 10;
//       return `${tens[tensPart]} ${ones[onesPart]}`.trim();
//   }
// }

// console.log(numberToText(35));
// console.log(numberToText(89));
// console.log(numberToText(12));

//Task 3
// const changeCase = (word) => {
//   let result = "";
//   for (const char of word) {
//     if (char >= "a" && char <= "z") {
//       result += char.toUpperCase();
//     } else if (char >= "A" && char <= "Z") {
//       result += char.toLowerCase();
//     } else if (char >= "0" && char <= "9") {
//       result += "_";
//     } else {
//       result += char;
//     }
//   }
//   return result;
// };

// console.log(changeCase("hello Mate98"));

//Task 4
// const toCamelCase = (cssStyle) => {
//     return cssStyle.split('-').map((word, index) => {
//       if (index === 0) {
//         return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join('');
//   };

//   console.log(toCamelCase('font-size'));
//   console.log(toCamelCase('background-color'));
//   console.log(toCamelCase('text-align'));

//Task 5
//   const toAbbreviation = (phrase) => {
//     return phrase
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase())
//       .join('');
//   };

//   console.log(toAbbreviation('cascading style sheets'));

//Task 6

// const combineStrings = (...strings) => {
//   return strings.join("");
// };
// console.log(combineStrings("Hi", "my", "name", "is"));

//Task 7
// const calculator = (expression) => {
//     let [operand1, operator, operand2] = expression.split(' ');

//     operand1 = Number(operand1);
//     operand2 = Number(operand2);

//     switch (operator) {
//       case '+':
//         return operand1 + operand2;
//       case '-':
//         return operand1 - operand2;
//       case '*':
//         return operand1 * operand2;
//       case '/':
//         return operand1 / operand2;
//       default:
//         return 'Incorrect';
//     }
//   };

//   console.log(calculator('10 + 50'));

//Task 8
// const getUrlInfo = (url) => {
//     const protocolEndIndex = url.indexOf('://');
//     const protocol = url.slice(0, protocolEndIndex);

//     const domainStartIndex = protocolEndIndex + 3;
//     const pathStartIndex = url.indexOf('/', domainStartIndex);

//     let domain;
//     if (pathStartIndex === -1) {
//       domain = url.slice(domainStartIndex);
//     } else {
//       domain = url.slice(domainStartIndex, pathStartIndex);
//     }

//     let path;
//     if (pathStartIndex === -1) {
//       path = '/';
//     } else {
//       path = url.slice(pathStartIndex);
//     }

//     return `Протокол: ${protocol}, Домен: ${domain}, Путь: ${path}`;
//   };

//   console.log(getUrlInfo("https://itstep.org/ua/about"));

//Task 9
// const customSplit = (str, delimiter) => {
//   const result = [];
//   let currentSubstring = "";

//   for (const char of str) {
//     if (char === delimiter) {
//       if (currentSubstring.length > 0) {
//         result.push(currentSubstring);
//         currentSubstring = "";
//       }
//     } else {
//       currentSubstring += char;
//     }
//   }

//   if (currentSubstring.length > 0) {
//     result.push(currentSubstring);
//   }

//   return result;
// };

// console.log(customSplit("10/08/2020", "/"));
