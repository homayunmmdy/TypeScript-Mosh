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

## static memeber

a property that is shared across all instances of a class, and can be accessed without creating an instance of the class.

```javascript
class Ride {
  private static _activeRides: number = 0;

  start() {Ride._activeRides++}
  stop() {Ride._activeRides--}

  static get activeRides() {
    return Ride._activeRides
  }
}


let ride1 = new Ride();
ride1.start()
let ride2 = new Ride();
ride2.start()

console.log(Ride.activeRides)
```

## inheritance

passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one

```javascript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + "" + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("taking a test")
  }
}

let student = new Student(1, 'john', 'smith');
```

## method overriding

When a child class method overrides the parent class method of the same name, parameters and return type

```javascript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor' + ' ' + super.fullName;
  }
}

let teacher = new Teacher('John','Smith')
console.log(teacher.fullName)

```

## polymorphism

flexibility allows the same function to work with various data types, promoting code reusability and versatility

```javascript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor" + " " + super.fullName;
  }
}

printNames([
  new Student(1,'John','Smith'),
  new Teacher('Homayoun','Mohammadi')
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
```

# Open Closed Principle

Classes should be open for extension and closed for modification.

### protected member

the method or property is only accessible within the class or any class that extends it, but not externally but don't use it as much as possible.
lik this example now everyone can access the walk that inherit the person but outside of that they don't had any accesss on it.

```javascript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    this.walk()
    console.log("taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor" + " " + super.fullName;
  }
}

printNames([
  new Student(1,'John','Smith'),
  new Teacher('Homayoun','Mohammadi')
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
```

# abstract classes and method

the concept of hiding complex implementation details and showing only the essential features or functionalities of an object or module to the user

for example here Shape is like on cooked meal and most extend some where and you can't directly connect to Shape.

```javascript

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Rendering a circle");
  }
}

```

# interface

a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.
in situation where they are algorithm provided and you need to extend the best chose is abstract but for shorter we can use interface here is the example

```javascript
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
```

# Generic

## generic classes

enable writing code that can work with a variety of data types while maintaining type safety

```javascript
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "Apple");

```

## generic in functions

```javascript
function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray("1");
```
## generic in interface

```javascript 
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username : string;
}

interface Product {
  title : string;
}

let users = fetch<User>('url')
let prodcuts = fetch<Product>('url')

```
## generic constraints
now the echo only set type for this interface 
```javascript 

interface Person {
  name: string;
}

function echo<T extends Person>(value: T): T {
  return value;
}


```

## 3 way of Extending Generic Classes

```javascript 
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restric the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic tyep parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}


```

## keyof type
used to derive new types from an existing object type's keys

```javascript 
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });
store.find('price', 1)

```

## type mapping 
Let you create a change in an existing type also typescript 
have lot's rebuildl of this called Utility Types and you can check
theme in their website

```javascript 
interface Product {
  name: string;
  price: number;
}

type ReadOnlyProducts = {
  readonly [K in keyof Product]: Product[K]
}

```