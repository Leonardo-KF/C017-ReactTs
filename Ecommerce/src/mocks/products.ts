import { Product } from "../utils/types/product.type";
import { productList } from "./productList";

export async function getProducts(): Promise<Product[]> {
  return productList;
}
