interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

