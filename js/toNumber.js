//*****TO NUMBER****

//любое строчное значение к числу

let value = "Qwe qwe qwe";

//1й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//строчное число к числу

value = "1234";

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//пустая строка к числу

value = "";

//1й способ
toNumber = Number(value);
console.log(`пустая строка${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных пустой строки ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`пустая строка${value}, через унарный +: `, toNumber);
console.log(
  `тип данных пустой строки ${value}, через унарный +: `,
  typeof toNumber
);

//строка с пробелом к числу

value = " ";

//1й способ
toNumber = Number(value);
console.log(
  `строка с пробелом ${value}, через конструктор Number(): `,
  toNumber
);
console.log(
  `тип данных строки с пробелом ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`строка с пробелом${value}, через унарный +: `, toNumber);
console.log(
  `тип данных строки с пробелом ${value}, через унарный +: `,
  typeof toNumber
);

//Булевое (логическое) true к числу
value = true;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//Булевое (логическое) false к числу
value = false;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//-------

//undefined к числу
value = undefined;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//-------

//null к числу
value = null;

//1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);
