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


Being specific with literal types

    let userType: "admin" | "user" | "guest" = "admin";
    console.log(userType) // Output: "admin"

    userType = "user";
    console.log(userType) // Output: "user"


Type aliases, or custom types

    type Role = "admin" | "user" | "guest";

type aliases are vbery useful for object types

    type User = {
    name: string;
    role: Role;
    age: number;
    info: {
            email: string;
            phone: string;
        }
    }

Function value return types

```
const addition = (a: number, b: number): number => {
    // this function must return a number, if it doesn't, TypeScript will throw an error

    return a + b;
}
```

You can return _**void**_ if you don't want the function to return anything, for example, this is usually inferred by typescript though if the function doesn't return anything

```
const returnVoid = (message : string): void => {
    console.log(message);
}
```

### The _**never**_ type

```
const logAndThrowError = (errorMessage: string): never => {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
```
Typescript infers void for this function, but you can declare it the never type, this is more specific, and we woudl use it here becasue as the functions throws an error, it technically never completes, where as after the conosle log completes in the void function, that function has finished