import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Product } from "../utils/types/product.type";

type ProductsProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  products: Product[];
  filter: string;
  setProducts: Dispatch<SetStateAction<Product[]>>;
  setFilter: Dispatch<SetStateAction<string>>;
};

const defaultValue = {
  products: [],
  filter: "",
  setProducts: () => {},
  setFilter: () => {},
};

export const ProductsContext = createContext<ContextProps>(defaultValue);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [filter, setFilter] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, filter, setFilter }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
