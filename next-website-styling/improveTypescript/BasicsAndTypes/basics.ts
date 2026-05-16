console.log("Hello World! This is a TypeScript file.");

let userName: string;
let userId: number;

userName = "John Doe";
userId = 12345;

console.log(typeof userName); // Output: string
console.log(typeof userId); // Output: number

const add = (x: number, y: number): number => {
  return x + y;
};

console.log(add(5, 10)); // Output: 15

let age: any;
age = 30; // age is a number
age = "30"; // age is a string

let users: string[] = ["Alice", "Bob", "Charlie"];
console.log(users); // Output: ["Alice", "Bob", "Charlie"]

let numberAndWords: Array<number | string> = [1, "two", 3, "four"];

let tupleType :[number, number] = [10, 20];

let newUser :{
    name: string;
    age: number;
    role: {
        id: number;
        name: string;
    }
}

