import { useContext } from "react";
import { ProductsContext } from "../context/context";

export function useProducts() {
  return useContext(ProductsContext);
}
