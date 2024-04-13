/* Type by infernece   */
/* in some case there is no used to create type explicit same code of js ts from js code knows the type of that js code */
/* example */

const myName = "Suraj Pandey";
console.log(`My Name is ${myName}`);

/* here ts knows from ourselves that myName is String */
/* for running ts code without compiling into js code we first install "ts-node" and run "ts-node fileName" */

/* Defining Type */
/* in below example we use infered type */

const user = {
  name: "Suraj",
  age: 24,
};

console.log("first name---->", user.name);
console.log("age---->", user.age);

/* let see object with ts type with the help of interface */

interface user {
  name: string;
  age: number;
}

const userBrother: user = {
  name: "Shailendra",
  age: 45,
};

console.log("user brother name----->", userBrother.name);
console.log("user brother aage----->", userBrother.age);

/* class and object constructor example */

interface ClassUser {
  name: string;
  age: number;
  isPassed: boolean;
}

class StudentAccount {
  name: string;
  age: number;
  isPassed: boolean;

  constructor(name: string, age: number, marks: number) {
    (this.name = name),
      (this.age = age),
      marks > 80 ? (this.isPassed = true) : (this.isPassed = false);
  }
}

const firstStudent: ClassUser = new StudentAccount("Lucky", 45, 90);
console.log("first student log---->", firstStudent);

/* we can use interface to annotate for function parameter and function return value */

function getStudentFirstName(user: ClassUser): string {
  return user.name;
}

console.log("student name----->", getStudentFirstName(firstStudent));

/* different type used in interface type are:-----
     1.string
     2.number
     3.boolean
     4.bigint
     5.null
     6.undefined
     7.symbol
     8.any (allow any thing without checking type)
     9.unknown (allow any type but with checking type)
     10.void (a function which returns undefined or has no return value)
*/

/* composing types 
we can create complex type using simple type
two methods are union and generics
*/

/* union (With a union, you can declare that a type could be one of many types)
   A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be
 */

type Mystring = "suraj" | "sunny" | "rajat" | "auyush";
type Mybool = true | false;

const stringValue = function (value: Mystring, bool: boolean): string {
  if (bool === true) {
    return value;
  }
  return "novalue";
};

console.log("my string value", stringValue("suraj", true));

/* in ts also we use typeOf to check type */

const checkType = function (str: string | string[]): string | string[] {
  if (typeof str === "string") {
    return [str];
  }
  return str;
};

console.log("use of check type ", checkType("suraj"));

/*  
    Generics it is used to provide variable for ts Type
    A common example is an array
*/
type stringArray = Array<string>;
type numberString = Array<number>;
type objectwithnamearray = Array<{ name: string }>;

const myArray: objectwithnamearray = [
  { name: "suraj" },
  { name: "sunny" },
  { name: "tushar" },
];

myArray.forEach((value): string => {
  console.log(value.name);
  return value.name;
});

/* we can declare own type using generics */

interface box<Type> {
  value: Type;
}

const stringBox: box<string> = {
  value: "Hello",
};

const numberBox: box<number> = {
  value: 56,
};
