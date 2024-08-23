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