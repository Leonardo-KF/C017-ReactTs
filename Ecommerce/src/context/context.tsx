import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Product } from "../utils/types/product.type";
import { api } from "../utils/api/api";

type ProductsProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  products: Product[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  deleteProduct: (productId: string) => void;
};

const defaultValue = {
  products: [],
  filter: "",
  setFilter: () => {},
  deleteProduct: () => {},
};

export const ProductsContext = createContext<ContextProps>(defaultValue);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [filter, setFilter] = useState<string>("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const products = allProducts.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  async function getProducts() {
    const Products = await api.getProducts();
    setAllProducts(Products ?? []);
  }

  async function deleteProduct(productId: string) {
    const newProducts = allProducts.filter(
      (product) => product.id !== productId
    );
    setAllProducts(newProducts);
    await api.deleteProduct(productId);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, filter, setFilter, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
