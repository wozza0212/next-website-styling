### Typescript Basics and Basic Types

To test typescript file:

    npx ts-node basics.ts

Example of a basic type

    let userName: string
    userName = 'John Doe'

Can print types out

    console.log(typeof userName); // Output: string
    console.log(typeof userId); // Output: number

type is inferred when you assign a value

    let UserId = 36 // infers type number for UserId

what type will a function return

    const add = (x: number, y: number): number => {
    return x + y;
    }; // Function will return a number

If you're not sure about type you can use 'any' type, this typ should genuinely be avoided though

    let age: any;
    age = 30; // age is a number
    age = "30"; // age is a string

Union Types are great for flexibility

    let age: number | string

You can user array types for arrays

    let users: string[] = ["Alice", "Bob", "Charlie"];
    console.log(users); // Output: ["Alice", "Bob", "Charlie"]

Uou can also combine aray types and Union types

    let numberAndWords: (number | string)[] = [1, "two", 3, "four"];

There is another way of writing the above by using a generic type, this type is a little more advanced though

    let numberAndWords: Array<(number | string)> = [1, "two", 3, "four"];

What are Tuple Types?

    let tupleType :[number, number] = [10, 20];

This tupple type above will only accept two numbers

Object Types are used a lot, where you define the type object

    let newUser :{
    name: string;
    age: number;
    }

An object type can aslo include another object, like here

    type newUser = {
    name: string;
    age: number;
    role: {
        id: number;
        name: string;
        }
    }

where role is another type held within the newUser type

setting this type for a new user would look like this

    type newUser = {
        name: string;
        age: number;
        role: {
            id: number;
            name: string;
        }
    }

    const user: newUser = {
        name: "Jane Doe",
        age: 28,
        role: {
            id: 1,
            name: "Admin"
            }
    };

Must not be null type

    let val: {} = 'Just a string'; // val can be any non-primitive type

This means you wouldnt be able to assign the value null to this type, this type is not commonly used


Flexible Objects (AKA the record type)

Using the RECORD type will look somewhat like this

    type data = Record<string, number | string>

And what this means is you can set the key for the object as a string, and the values can be set as numbers or strings, for example:

    const newData : data = {
        stringKey1: "Value 1",
        stringKey2: 42,
        stringKey3: "Value 3"
    }

Working with enums
Enums let you state a number of specific values

    enum Roles {
        Admin,
        User,
        Guest,
            }

    const userRole: Roles = Roles.Admin; // 
    
    Output: 0 (the index of Admin in the enum)
You can override the values so they arent just 0,1 and 2 here
For example, this would output admin

    enum customEnum {
        Admin = 'Admin',
        User = 'User',
        Guest = 'Guest',
    }

    const userCustomRole: customEnum = customEnum.Admin;

    console.log(userCustomRole); // Output: "Admin"


Literal Types are types where you set up specific values, they are generally preferred to enums, so here's a button type example

    type buttonType = "primary" | "secondary" | "tertiary";

    const newButton: buttonType = "primary";


Functions as types

```
const logSomething = (message: string) => {
  console.log(message);
};

const performAction = (cb: (m: string) => void) => {
  cb("Action Complete");
};

// in this case () => void is a function type that represents a function that takes no arguments and returns nothing (void).

performAction(logSomething); // Output: "Action Complete"
```

Better example below when done with a users greeting mesage

```
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

```

### Null and undefined types

Null or undefined typs come in useful, for instance in a game if a weapon hasn't been picked up by the player yet, the weapon would be null, the player name may also be undefined at the when first signing up to play

```
type Player = {
    name: string | undefined; // name can be a string or undefined
    score: number;
    weapon: string | null; // weapon can be a string or null
}

const player1: Player = {
    name: "Player One",
    score: 100,
    weapon: null, // player1 does not have a weapon
}
```

You can use the ! to ignore a potential null error, this could however cause run time issues, you can also use a ? for optional chaining, however a ? states to only proceed if the avlue isnt null

```
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
```

### Type Casting

```
const someObject = {
    name: "Some Object",
    score: 75,
    weapon: "Bow",  
} as Player

greetPlayer(someObject); // Output: "Hello, SOME OBJECT!"
```

### the unknown type

Useful for if you don't know what the incoming value will be, although you will have to cover for all types of value or you may get a runtime error

```
const processSomething = (val: unknown) => {
  if (typeof val === "string") {
    val.trim(); // Now TypeScript knows val is a string and allows us to call trim
    console.log(val.trim()); // Output: trimmed string
  }
};

processSomething(9); // No output, as 9 is not an object with a trim method
processSomething("  Hello World!  "); // Output: "Hello World!"

```

this can be known as type narrowing, as you are narrowing down the types you will process


### Optional Types

These are handy if not all players will have the same properties, some are not necessary

```
type newPlayer = {
  name: string;
  score: number;
  weapon?: string;
  describeWeapon: () => void;
};

const weaponDecleration = (string?: string): string => {
  return string ? `Nice ${string}.` : "No weapon declared.";
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
```

