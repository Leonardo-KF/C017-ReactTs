import { Product, ProductInput, UserInput, User } from "../types/product.type";
import axios from "axios";
import swal from "sweetalert";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: "warning",
    timer: 5000,
  });
}

export const api = {
  getProducts: async (): Promise<Product[] | undefined> => {
    try {
      const products = await axios.get("/product");
      return products.data;
    } catch (err: any) {
      handleError(
        "Erro no servidor",
        "Erro no servidor tente novamente em alguns instantes"
      );
    }
  },

  createProduct: async (
    product: ProductInput
  ): Promise<Product | undefined> => {
    try {
      const newProduct = await axios.post("/product/create", product);
      return newProduct.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar o produto", err.response.data.message[0]);
    }
  },

  deleteProduct: async (productId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete("/product/delete/" + productId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar produto",
        "Ocorreu um erro ao deletar o produto, por favor tente novamente mais tarde!"
      );
    }
  },

  getProductById: async (productId: string): Promise<Product | undefined> => {
    try {
      const product = await axios.get("/product/find/" + productId);
      return product.data;
    } catch (err) {
      handleError(
        "Produto não encontrado",
        "Nenhum produto com esse id foi encontrado no servidor"
      );
    }
  },

  updateProduct: async (product: Product): Promise<Product | undefined> => {
    try {
      const updatedProduct = await axios.patch(
        "/product/find/" + product.id,
        product
      );
      return updatedProduct.data;
    } catch (err: any) {
      handleError("Erro ao atualizar o produto", err.response.data.message[0]);
    }
  },

  resgisterUser: async (user: UserInput): Promise<User | undefined> => {
    try {
      const userCreate = await axios.post("/user/register", user);
      return userCreate.data;
    } catch (err: any) {
      handleError("Erro ao atualizar o produto", err.response.data.message[0]);
    }
  },
};
