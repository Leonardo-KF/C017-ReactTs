import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Product,
  ProductInput,
  ProductToCart,
} from "../utils/types/product.type";
import { api } from "../utils/api/api";
import { v4 } from "uuid";

type ProductsProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  products: Product[];
  cart: ProductToCart[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  deleteProduct: (productId: string) => void;
  createProduct: (productData: ProductInput) => void;
  updateProduct: (productData: Product) => void;
  addToCart: (productData: Product) => void;
  deleteToCart: (productId: string) => void;
  downQuantity: (productId: string) => void;
};

const defaultValue = {
  products: [],
  cart: [],
  filter: "",
  setFilter: () => {},
  deleteProduct: () => {},
  createProduct: () => {},
  updateProduct: () => {},
  addToCart: () => {},
  deleteToCart: () => {},
  downQuantity: () => {},
};

export const ProductsContext = createContext<ContextProps>(defaultValue);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [filter, setFilter] = useState<string>("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<ProductToCart[]>([]);

  // Funções para lidar com o carrinho

  function addToCart(productData: Product) {
    if (
      cart.length === 0 ||
      cart.find((product) => product.id === productData.id) === undefined
    ) {
      const newCart = cart;
      newCart.push({ ...productData, quantity: 1 });
      setCart(newCart);
    } else {
      const updatedCart = cart.map((product, index) => {
        if (product.id === productData.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    }
  }

  function deleteToCart(productId: string) {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  }

  function downQuantity(productId: string) {
    const newCart = cart.map((product) => {
      if (product.id === productId) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
      }
      return product;
    });

    console.log("Carrinho", newCart);
    setCart(newCart);
  }

  console.log(cart);

  // funções para lidar com produtos - UI OTIMISTA
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

  async function updateProduct(productData: Product) {
    const newProducts = allProducts.map((product) => {
      if (product.id === productData.id) {
        return productData;
      }
      return product;
    });

    setAllProducts(newProducts);
    await api.updateProduct(productData);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        filter,
        setFilter,
        deleteProduct,
        createProduct,
        updateProduct,
        addToCart,
        deleteToCart,
        downQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
