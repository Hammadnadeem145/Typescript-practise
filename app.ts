import inquirer from "inquirer";
import chalk from "chalk";

//step00_helloworld

// const message = 'Hello World';
// console.log(message);

//step00a_json_objects

// let detail = { "name": "Hammad", "age": 21 }
// console.log(detail.name);
// console.log(detail.age);

//step00b_syntax_error

// let message = "Hello World";//syntax error
// console.log(message);

//step00c_type_error

// let message = "Hello World";
// console.log(message);

//step01_strong_typing

//strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

//type inference
// let e : string = "USA";
// let f : number = 10.9;
// f = 22;
// let g : boolean = false;
// g = true;

//step02_const_let

// const a : number  = 5;
// const b : number = 33;
// const c : string = "best";

// let z = 13;
// z = 12;
// console.log(z)

//step03c_import_inquirer_ECMAScript_module

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

//step03d_chalk

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// console.log(chalk.blue(("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.")))

//step05a_objects

// let teacher = {
//     name: "Hammad",
//     age: "21"
// }
// console.log(teacher.name);
// console.log(teacher["age"]);

// let student: {
//   name: string;
//   age: number;
// };

// student = {
//     name: "Hammad",
//     age: 21
// }
// console.log(student.name);
// console.log(student["age"]);

//step05c_structural_typing_object_literals

// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number;
// }

// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };

// console.log(ball);
// console.log(sphere);

// sphere = ball;
// ball = sphere;

// interface Tube {
//     length: number;
//     diameter: number;
// }

// let tube: Tube = { diameter: 12, length: 4 };
// ball = tube;
// console.log(tube);

// step05d_nested_objects

// type Author = {
//     firstName: string;
//     lastName: string;
// }

// type Book = {
//     author: Author;
//     name: string;
// }

// const myBook : Book = {
//     author: {
//         firstName: "Hammad",
//         lastName: "Nadeem"
//     },
//     name: "Khussi my friend"
// }

// console.log(myBook);

//step05e_intersection_types

// interface Student {
//     student_id: number;
//     name: string;
// }

// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }

// type intersected_type = Student & Teacher;

// let obj1: intersected_type = {
//     student_id: 2,
//     name: "Hammad Nadeem",
//     teacher_Id: 145,
//     teacher_name: "Rufi Don",
// };

// console.log(obj1.name);
// console.log(obj1.student_id);
// console.log(obj1.teacher_name);
// console.log(obj1.teacher_Id);

//step05f_any__unknown_never_types

//Any
// let myval: any;

// myval = true;
// console.log(myval);

// myval = 42;
// console.log(myval);

// myval = "hey fuck you";
// console.log(myval);

// myval = [];
// console.log(myval);

// myval = {};
// console.log(myval);

// myval = Math.random();
// console.log(myval);

// myval = null;
// console.log(myval);

// myval = undefined;
// console.log(myval);

// myval = () => { console.log("Wanna Ride My Horse?"); };
// console.log(myval());

//Unknown
// let value: unknown;

// value = false;
// console.log(value);

// value = 40;
// console.log(value);

// value = "hey bitch";
// console.log(value);

// value = [];
// console.log(value);

// value = {};
// console.log(value);

// value = Math.random();
// console.log(value);

// value = null;
// console.log(value);

// value = undefined;
// console.log(value);

// value = () => { console.log("Wanna Suck My Dick?"); };
// console.log(value);

//Assiging a value of type unknown to variable of other types

// let val: unknown;

// const val1: unknown = val;
// console.log(val1);
// const val2: any = val;
// console.log(val2);
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: any[] = val; // Will throw error

// step06_explict_casting

// let myname: unknown = "Hammad Nadeem";
// console.log((myname as string).length)

// step07a_enum

// enum Color {Red, Green, Blue};
// var c: Color = Color.Blue;
// console.log(c);

// enum Color1 {Red = 1, Green, Blue};
// var colarName: string = Color1[2];
// console.log(colarName) ;

// enum Color2 {Red = 1, Green = 2, Blue = 4};
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

// step08_arrays

// let array1: number[] = [4, 5, 6];
// console.log(array1[2]);

// let array2: number[] = [];
// console.log(array2);

// let array3: number[] = [];
// array3.push(1, 4, 5);
// console.log(array3);

// step09a_functions

//Named Function
// function add(x: number, y: number): number {
//   return x + y;
// }
// add(1, 4);
// console.log(add);

// Anonymous function
// let myAdd1 = function(x: number, y: number): number {
//     return x+y;
// }
// console.log(myAdd1);

//Lambda function
// let myAdd2 = (a: number, b: number) => a + b;
// myAdd2(2, 4);
// console.log(myAdd2);

//step09b_function_optional_parameter

// function buildNames(firstName: string, lastName?: string): string {
//     if (lastName)
//     return firstName + "" + lastName;
//     else
//     return firstName;
// }

// let check = buildNames("Hammad");
// console.log(check);
// let check1 = buildNames("Hammad", "Nadeem");
// console.log(check1);
// let check2 = buildNames("Hammad", "Nadeem", "Akbar"); // Will throw error due to excess parameters.

//step09c_function_default_parameter

// function buildNames(firstName: string, lastName = "Nadeem") : string {
//     if(lastName)
//     return firstName + " " + lastName;
//     else
//     return firstName;
// }

// let check = buildNames("Hammad");
// console.log(check);
// let check1 = buildNames("Hammad", "Ali");
// console.log(check1);

//step09d_function_rest_parameter

// function buildName(firstName: string, ...restofName: string[]) {
//     return firstName + " " + restofName.join(" ");
// }

// var employeeName = buildName("Hammad", "Salman", "Khubaib", "Ruwaifa");
// console.log(employeeName)

//step09e_callbacks_typed

// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }

// function callingunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }
// callingunction("myText", myCallBack);

// step09f_function_overloads

// function add(arg1: string, arg2: string): string;
// function add(arg1: number, arg2: number): number;
// function add(arg1: boolean, arg2: boolean): boolean;

// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2
// }

// // console.log(add(1, 2));
// // console.log(add("Hammad ", "Nadeem"));
// console.log(add(false, false));

//step10_tuples

// var tuple: [number, string] = [2, "Hammad"];
// var num1 = tuple[0];
// console.log(num1);

// I dont understand this
// const passingMarks: [string, number] = ["{}", 200];

// if (passingMarks[1] === 200) {
//     const result = JSON.parse(passingMarks[0]);
//     console.log(result);
// }

// passingMarks[1];

// type staffAccount = [number, string, string, string?];

// const staff: staffAccount[] = [
//     [0, "Hammad", "21"],
//     [1, "Ruwaifa", "20"],
//     [2, "Salman", "19", "Asscream"],
// ];

// // console.log(staff);

// type PayStubs = [staffAccount, ...number[]];

// const payStubs: PayStubs[] = [
//     [staff[0], 250],
//     [staff[1], 250, 300],
//     [staff[2], 250, 300, 350],
// ]
// // console.log(payStubs);

// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
// const monthThreePayments = payStubs[2][2];

// console.log(monthOnePayments);
// console.log(monthTwoPayments);
// console.log(monthThreePayments);

// declare function calculatedPay(id: number, ...arg: [...number[]]): number;

// calculatedPay(staff[0][0], payStubs[0][1]);
// calculatedPay(staff[1][0], payStubs[1][1], payStubs[1][2]);

//step11_oop

// class Car {
//     model!: string;
//     year!: number;
//     price!: string;

//     drive() {
//         console.log('THe Car has Started driving');
//     }

//     stop() {
//         console.log('The car has stopped');
//     }
// }

// const tesla = new Car()
// tesla.model = "Model X"
// tesla.year = 2023
// tesla.price = "$114,990"
// console.log(tesla)
// tesla.drive()
// tesla.stop()

// Constructor
// class Car {
//   model: string;
//   price: string;
//   year: number;

//   constructor(model: string, price: string, year: number) {
//     this.model = model;
//     this.price = price;
//     this.year = year;
//   }
// }

// const Tesla = new Car("Model X", "$1000", 2023);
// console.log(Tesla);

// Inheritance

// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log(`What's for dinner?`);
//     }

//     speak() {
//         console.log(`My name is ${this.name}, I am ${this.age} years`)
//     }
// }

// const announce = new Person("Hammad", 21);
// announce.eat()
// announce.speak()

// step12a_class_structural_typing_question

// class Human {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   eat() {
//     console.log(this.name + " is a Human and is eating");
//   }
// }

// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   eat() {
//     console.log(this.name + " is a Animal and is eating");
//   }
// }

// class wildAnimal {
//   title: string;

//   constructor(title: string) {
//     this.title = title;
//   }
//   eat() {
//     console.log(this.title + " is a Wild Animal and is eating");
//   }
// }

// class Robot {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// let h: Human = new Human("Hammad");
// // console.log(h);
// h.eat();

// let a: Animal = new Animal("Goat");
// // console.log(a);
// a.eat();

// let m: wildAnimal = new wildAnimal("Lion");
// // console.log(m);
// m.eat();

// let r: Robot = new Robot("1318");
// // console.log(r);

// let hum: Human = new Animal("Dog");
// console.log(hum);

// let r2: Robot = new Animal("Donkey");
// console.log(r2);

// var isItRobot = r2 instanceof Robot;
// console.log("Is Donkey a Robot: " + isItRobot);

// var isItAnimal = r2 instanceof Animal;
// console.log("Is Donkey a Animal: " + isItAnimal);

// step12b_class_structural_typing

// class Human {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Animal {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(this.name + " is a Human and its age is " + this.age);
//   }
// }

// let h1 = new Human("");
// let a1 = new Animal("World", 1220);
// console.log(h1);
// console.log(a1);
// a1.eat()

// h1 = new Animal("test", 24);
// console.log(h1);

// a1 = new Human("Hammad", 21); //Error

// step12c_typing_confusion

// class Human {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Animal {
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     eat(quantity: number){
//         console.log(this.name + " is a Human and his aage is " + this.age)
//     }
// }

// let d = {name: "Hello", age: 4};
// // console.log(d)

// let h: Human = {name: "Hello"};
// // console.log(h);

// let h1: Human = d;

// let isHuman: boolean = h instanceof Human;
// console.log(isHuman);
// let a1: Animal = {name: "Cat", age: 3, eat: function() {
//     console.log("Eat in object literal");
// }};

// a1.eat(3);
// console.log(a1);
// let isAnimal: boolean = a1 instanceof Animal;
// console.log(isAnimal);

// step13a_inheritance

// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(meters: number = 45) {
//     console.log(this.name + " moved " + meters + "m.");
//   }
// }

// // const d = new Animal("Hammad");
// // d.move();
// // // console.log(d);

// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meters = 5) {
//     console.log("Slithering...");
//     super.move(meters);
//   }
//   bite() {
//     console.log("bites");
//   }
// }

// // let s = new Snake("Anaconda");
// // console.log(s);
// // s.move();
// // s.bite();

// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meters = 45) {
//     alert("Galloping...");
//     super.move(meters);
//   }
// }

// class Donkey extends Animal {
//     distance: number
//   constructor(name: string, distance: number) {
//     super(name);
//     this.distance = distance;
//   }
//   move(meters = 53) {
//     alert("Moving...");
//     super.move(meters);
//   }
// }

// class Cats extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     move(meters = 1) {
//         alert("Jumping...");
//         super.move(meters);
//     }
// }

// let a: Animal = new Snake("Python");
// a.move(5);
// console.log(a);

// let a1: Animal = new Horse("Rocket");
// console.log(a1);

// let h: Horse = a1;
// console.log(h);

// let a2: Animal = new Donkey("Worder", 199);
// console.log(a2);

// let h3: Donkey = a2 as Donkey;
// console.log(h3);

// let d1: Horse = new Donkey("Worder", 299);

// console.log("is Animal? "+ (d1 instanceof Animal)); // true
// console.log("is Donkey? "+ (d1 instanceof Donkey)); // true
// console.log("is Horse? "+ (d1 instanceof Horse));

// step13b_abstract_classes

// abstract class Base {
//   abstract getName(): string;

//   printName() {
//     console.log("Hello, " + this.getName());
//   }
// }

// class Derived extends Base {
//   getName() {
//     return "worlds";
//   }
// }

// const d = new Derived();
// console.log(d);
// d.printName();
// d.getName();

// abstract class Base {
//     foo(): number {
//         return this.bar();
//     }
//     abstract bar() : number;
// }

// class E extends Base {
//     bar() {
//         return 4;
//     }
// }

// step13c_constructor

// Case 1:
// If parent class provide constructor and child class does not
// provide then child class will use parent's constrcutor
// and child's object creation will required use of parent's
//constructor parameters

// class A {
//     name: string;
//     constructor(theName: string, age: number) {
//         this.name = theName;
//         console.log("A constructor")
//     }
// }

// class B extends A {

// }
// let a: A = new A("A", 4);
// let b: B = new B("C", 8);
// let c: B = new B();  // This is not working as child class must use parents constructor
// let d: B = new B("C"); //This is also not working

// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then
// child class must call super() within child's class constructor
// class C {}
// class D extends C {
//   name: string;
//   constructor(theName: string, age: number) {
//     super();
//     this.name = theName;
//     console.log("D constructor");
//   }
// }

// let aa: C = new C();
// let bb: D = new D(); //ERROR
// let cc: D = new D("C", 9);

// Case 3:
// If parent class and child class both provide constructor
// then child class must call super with same parameters as
// they are in parent's constructor call to super

// class E {
//   name: string;
//   constructor(theName: string, age: number) {
//     this.name = theName;
//     console.log("E constructor");
//   }
//   displayName(): void {
//     console.log("Name = " + this.name);
//   }
// }

// class F extends E {
//     name: string;
//     constructor(theName: string) {
//         super(theName, 4);
//         this.name = theName;
//     }
// }

// let e: E = new E("E", 1);
// let f: F = new F("F");
// f.displayName();


