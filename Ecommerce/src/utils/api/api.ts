import { Product, ProductInput } from "../types/product.type";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
  getProducts: async (): Promise<Product[] | undefined> => {
    try {
      const products = await axios.get("/product");
      return products.data;
    } catch (err: any) {
      console.log(err);
      alert("Erro no servidor");
    }
  },

  createProduct: async (
    product: ProductInput
  ): Promise<Product | undefined> => {
    try {
      const newProduct = await axios.post("/product/create", product);
      return newProduct.data;
    } catch (err: any) {
      alert("Erro ao criar o produto");
    }
  },

  deleteProduct: async (productId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete("/product/delete/" + productId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      alert("Erro ao deletar o produto");
    }
  },
};
