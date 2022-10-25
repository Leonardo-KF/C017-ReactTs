import {
  Product,
  ProductInput,
  UserInput,
  User,
  SignIn,
  LoginResponse,
} from "../types/product.type";
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
      const data = product;
      delete data.id;
      const newProduct = await axios.post("/product/create", data);
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
      handleError("Erro ao registrar o usuário", err.response.data.message[0]);
    }
  },

  signIn: async (loginData: SignIn): Promise<LoginResponse | undefined> => {
    try {
      const login = await axios.post("/auth/login", loginData);
      localStorage.setItem("token", login.data.token);
      return login.data;
    } catch (err: any) {
      handleError(
        "Email ou senha incorretos tente novamente",
        err.response.data.message[0]
      );
    }
  },

  getLoggedUser: async (): Promise<User | undefined> => {
    try {
      const user = await axios.get("/auth/profile");
      return user.data;
    } catch (err: any) {
      console.log(err.response.data.statusCode);
    }
  },
};
