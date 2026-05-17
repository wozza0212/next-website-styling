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

let tupleType: [number, number] = [10, 20];

type newUser = {
  name: string;
  age: number;
  role: {
    id: number;
    name: string;
  };
};

const user: newUser = {
  name: "Jane Doe",
  age: 28,
  role: {
    id: 1,
    name: "Admin",
  },
};

let val: {} = "Just a string"; // val can be any non-primitive type

type data = Record<string, number | string>;

const newData: data = {
  stringKey1: "Value 1",
  stringKey2: 42,
  stringKey3: "Value 3",
};

enum Roles {
  Admin,
  User,
  Guest,
}

const userRole: Roles = Roles.Admin;

console.log(userRole); // Output: 0 (the index of Admin in the enum)

enum customEnum {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest',
}

const userCustomRole: customEnum = customEnum.Admin;

console.log(userCustomRole); // Output: "Admin"

type buttonType = "primary" | "secondary" | "tertiary";

const newButton: buttonType = "primary";