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

    let newUser :{
    name: string;
    age: number;
    role: {
        id: number;
        name: string;
        }
    }

where role is another type held within the newUser type
