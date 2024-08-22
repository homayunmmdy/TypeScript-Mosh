## varities of Types

Javascript and Typescript both of theme have some build in types like this table as you see

| javascript | typescript |
| ---------- | ---------- |
| number     | any        |
| string     | unkown     |
| boolean    | bim        |
| null       | never      |
| undefined  | enum       |
| objec      | tuple      |

## Best Practice

- allways set type for parameter and return value of your function

## type any

It allows you to assign a variable or function parameter to be of literally any type

```javascript
let level; //if you create value don't inzilaized it will be any (don't use as much as possible)
level = 1;
level = "a";
```

## type unknow

when a value might have any type, or when it is not convenient to use a more specific type

## type never

represents the type of values that never occur.

```javascript
function processEvents(): never {
  while (true) {
    console.log("processing...");
  }
}
processEvents();
console.log("hi");
```

for example in this code hi log will never run because the previous
function is never stop

## type tuple

It provides a way to represent the ordered set of the element types for certain elements in a TypeScript array. best practice is use this only
for key and value more than 2 items will be hard to read and understand the code.

```javascript
let user: [number, string] = [1, "Homayoun"];
```

## type enum

By default an enum is number based, starting at zero, and each option is assigned an increment by one. This is useful when the value is not important.

```javascript
enum Size {
  Small = 1, // you can customize the starter
  Medium, //this will incress by one and it will be 2
  Large, // also one this will incress by one and it will be 3
}

```

# here are list of the advance types in the typescript

## type alias

allows creating a reference to a type using another name

```javascript
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Homayoun",
  retire: (date: Date) => {
    console.log(date);
  },
};
```

## type union

describes a value that can be one of several types

```javascript
function kgTobs(weight: number | string) {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgTobs(1);
kgTobs("10kg");
```

## intersection type

combines multiple types into one

```javascript
type Draggable = {
  drag: () => void,
};

type Resizable = {
  resize: () => void,
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
```

## type Literal

let you indicate that an expression is equal to some specific primitive value

```javascript
type Metric = "cm" | "inch";
```

# Operations

## optional chaining operator (?.)

useful to access a property of an object which may be null or undefined

```javascript
let names: string[] | null = null;
names?.[0];
```

## nullish coalescing ( ?? )

a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

```javascript
let speed: number | null = null;
let ride = {
  // Falsy (undefined , null , '' , false , 0)
  // Nullish calescing operator
  speed: speed ?? 30,
};
```

# type assertion

mechanism which tells the compiler about the type of a variable.in the example it is mean that just show inputelement as option and don't show others

```javascript
let phone = document.getElementById('phone') as HTMLInputElement;

phone.value
```

## Index Signature

a way to define the Shape of fields which are not known ahead of time

```javascript
class SeatAssignment {
  // A1 , A2, ...
  // Homayoun , Mosh , ...
  [seatNumber : string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Homayoun';
seats.A2 = 'Mosh'
```