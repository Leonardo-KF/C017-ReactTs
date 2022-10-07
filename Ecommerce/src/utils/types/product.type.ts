export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
};

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  imageURL: string;
};

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
