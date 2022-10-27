export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

export type ProductInput = {
  id?: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
};

export interface ProductToCart extends Product {
  quantity: number;
}

export type UserInput = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  birthdate: string;
  imageURL: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  imageURL: string;
  products?: Product[];
};

export type SignIn = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};
