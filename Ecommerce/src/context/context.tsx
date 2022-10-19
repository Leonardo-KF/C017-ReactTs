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
  setProducts: Dispatch<SetStateAction<Product[]>>;
};

const defaultValue = {
  products: [],
  setProducts: () => {},
};

export const ProductsContext = createContext<ContextProps>(defaultValue);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
