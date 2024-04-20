/* 
Basic type in js and ts are:---
1.string
2.number
3.boolean
method to write are:---
 */

type Name = string;
type Age = number;
type IsStudent = boolean;

function studentData(name: Name, age: Age, isStudent: IsStudent) {
  return {
    name,
    age,
    isStudent,
  };
}

console.log(studentData("suraj", 65, false));

/*
for Array we use string[] or number[] or Array<string> or Array<number>
*/

type Fruit = string[];
const myFavouriteFruit = (fruit: Fruit) => {
  fruit.forEach((e, i) => {
    console.log(`my ${i + 1} favourite fruit is ${e}`);
  });
};

myFavouriteFruit(["Apple", "Orange", "Banana"]);

/*
type any :- it will be use when we want not any typos error
it will take take any type and return any type of type any

The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
*/

interface User {
  name: string;
  age: number;
  hobby: any;
}

const student1: User = {
  name: "suraj Pandey",
  age: 26,
  hobby: ["cricket", "football"],
};

const student2: User = {
  name: "suraj Pandey",
  age: 26,
  hobby: "cricket",
};

console.log(student1, student2);

/* function which return Promise we use return types annotate is Promise */

async function tickClock(): Promise<number> {
  return 9;
}

// object type

function printCord(pt: { x: number; y: number }) {
  console.log(`the x coordinate is ${pt.x}`);
  console.log(`the y coordinate is ${pt.y}`);
}

printCord({ x: 3, y: 5 });

// optional properties.....
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name

function printName(obj: { first: string; last?: string }) {
  console.log(`my name is ${obj.first} ${obj.last}`);
}

printName({ first: "suraj", last: "pandey" });
printName({ first: "shailendra" }); // last name is return undefined

// union type

/* The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, 
representing values that may be any one of those types. We refer to each of these types as the union’s members. */

function printId(id: string | number) {
  console.log(`my id is ${id}`);
}

printId("43");
printId(76);

// type aliases

/* We’ve been using object types and union types by writing them directly in type annotations. 
This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name */

type Axis = {
  x: number;
  y: number;
};

function printCoordinate(pt: Axis) {
  console.log(`x coordinate is ${pt.x}`);
  console.log(`y coordinate is ${pt.y}`);
}

printCoordinate({ x: 100, y: 500 });

type Student = string[] | string;

function studentName(name: Student) {
  if (Array.isArray(name)) {
    name.forEach((e) => {
      console.log(`student name is ${e}`);
    });
  }
  console.log(`student name is ${name}`);
}

studentName("suraj");
studentName(["shailendra", "richa", "ruchi", "manju"]);

// interfaces type

// An interface declaration is another way to name an object type:

interface Section {
  studentName: string;
  sectionName: string;
  className?: string;
}

function studentDetails(student: Section) {
  console.log(
    `${student.studentName} is study in ${student.className} ${student.sectionName}`
  );
}

studentDetails({
  studentName: "suraj Pandey",
  sectionName: "A",
  className: "10",
});

// difference between interfaces and type aliases

// type aliases and interface both are very similiar almost all the features of interface is in type the only differnce is that type aliases
// cannot not reopen to add new propertie whereas in interface always extendable

// extending an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  color: string;
}

function BearColor(bear: Bear) {
  console.log(`${bear.name} color is ${bear.color}`);
}

BearColor({ name: "Jojo", color: "Black" });

// extending in type

type PetAnimal = {
  name: string;
};

type Dog = PetAnimal & {
  color: string;
};

function DogColor(dog: Dog) {
  console.log(`${dog.name} color is ${dog.color}`);
}

DogColor({ name: "pihu", color: "white" });

// type assertions
