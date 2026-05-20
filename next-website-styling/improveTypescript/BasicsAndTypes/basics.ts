import { error } from "console";

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
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

const userCustomRole: customEnum = customEnum.Admin;

console.log(userCustomRole); // Output: "Admin"

type buttonType = "primary" | "secondary" | "tertiary";

const newButton: buttonType = "primary";

const subtract = (x: number, y: number): number => {
  return x - y;
};

const subtraction = (x: number, y: number): number => {
  return x - y;
};

const logSomething = (message: string) => {
  console.log(message);
};

const performAction = (cb: (m: string) => void) => {
  cb("Action Complete");
};

// in this case () => void is a function type that represents a function that takes no arguments and returns nothing (void).

performAction(logSomething); // Output: "Action Complete"

type User = {
  name: string;
  age: number;
  greeting: (message: string) => void;
};

const user1: User = {
  name: "Alice",
  age: 30,
  greeting(message: string) {
    console.log(`${message} ${this.name}!`);
  },
};

user1.greeting("Welcome"); // Output: "Welcome Alice!"

type UserWithNulls = {
  name: string | null;
  age: number | undefined;
};

const user2: UserWithNulls = {
  name: null,
  age: undefined,
};

console.log(user2); // Output: { name: null, age: undefined }

type Player = {
  name: string | undefined; // name can be a string or undefined
  score: number;
  weapon: string | null; // weapon can be a string or null
};

const player1: Player = {
  name: "Player One",
  score: 100,
  weapon: null, // player1 does not have a weapon
};

const player2: Player = {
  name: undefined, // player2's name is undefined
  score: 50,
  weapon: "Sword", // player2 has a weapon
};

const greetPlayer = (player: Player) => {
  player.name?.toUpperCase(); // Using optional chaining to safely access name property
  console.log(
    player?.name ? `Hello, ${player.name.toUpperCase()}!` : "Hello, player!",
  );
};

greetPlayer(player1); // Output: "Hello, PLAYER ONE!"
greetPlayer(player2); // Output: "Hello, player!"

const someObject = {
  name: "Some Object",
  score: 75,
  weapon: "Bow",
} as Player;

greetPlayer(someObject); // Output: "Hello, SOME OBJECT!"

const processSomething = (val: unknown) => {
  if (typeof val === "string") {
    val.trim(); // Now TypeScript knows val is a string and allows us to call trim
    console.log(val.trim()); // Output: trimmed string
  }
};

processSomething(9); // No output, as 9 is not an object with a trim method
processSomething("  Hello World!  "); // Output: "Hello World!"

const generateError = (msg?: string): never => {
  if (msg) {
    console.log(msg);
  }
  throw Error("Generic Error");
};

const weaponDecleration = (string?: string): string => {
  return string ? `Nice ${string}.` : "No weapon declared.";
};

type newPlayer = {
  name: string;
  score: number;
  weapon?: string;
  describeWeapon: () => void;
};

const player3: newPlayer = {
  name: "Player Three",
  score: 80,
  weapon: "Axe",
  describeWeapon: () => weaponDecleration(player3.weapon),
};

console.log(player3.describeWeapon?.()); // Output: "Nice Axe!"

const player4: newPlayer = {
  name: "Player Four",
  score: 60,
  describeWeapon: () => weaponDecleration(player4.weapon),
};

console.log(player4.describeWeapon?.()); // Output: "No weapon declared."
let userType: "admin" | "user" | "guest" = "admin";
console.log(userType) // Output: "admin"

userType = "user";
console.log(userType) // Output: "user"


type Role = "admin" | "user" | "guest";

type User = {
    name: string;
    role: Role;
    age: number;
    info: {
        email: string;
        phone: string;
    }
}

const addition = (a: number, b: number): number => {
    // this function must return a number, if it doesn't, TypeScript will throw an error
    return a + b;
}

console.log(addition(10, 20)); // Output: 30

const returnVoid = (message : string): void => {
    console.log(message);
}

returnVoid("This function returns void, it doesn't return anything."); // Output: "This function returns void, it doesn't return anything."

const logAndThrowError = (errorMessage: string): never => {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
