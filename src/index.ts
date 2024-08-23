interface Person {
  name: string;
}

function echo<T extends Person>(value: T): T {
  return value;
}
