import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Product, ProductInput } from "../utils/types/product.type";
import { api } from "../utils/api/api";
import { v4 } from "uuid";

type ProductsProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  products: Product[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  deleteProduct: (productId: string) => void;
  createProduct: (productData: ProductInput) => void;
};

const defaultValue = {
  products: [],
  filter: "",
  setFilter: () => {},
  deleteProduct: () => {},
  createProduct: () => {},
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

  async function createProduct(productData: ProductInput) {
    const newProduct = { ...productData, id: v4() };
    setAllProducts([...allProducts, newProduct]);
    await api.createProduct(productData);
  }

  console.log(products, allProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, filter, setFilter, deleteProduct, createProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
