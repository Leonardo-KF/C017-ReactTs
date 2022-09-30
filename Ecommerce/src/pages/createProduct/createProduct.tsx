import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../utils/types/product.type";
import { ContentDiv } from "./styles";
import { api } from "../../utils/api/api";

export function CreateProduct() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct: Product = {
      id: "1",
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      price: e.currentTarget.productPrice.value,
      imageURL: e.currentTarget.productImage.value,
    };

    await api.createProduct(newProduct);

    navigate("/");
  }

  return (
    <ContentDiv>
      <h2>Cadatro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input type="text" name="productName" required></input>
        <label>Product Description</label>
        <input type="text" name="productDescription" required></input>
        <label>Product Price</label>
        <input type="number" step="0.01" name="productPrice" required></input>
        <label>Product Image</label>
        <input type="text" name="productImage" required></input>
        <button type="submit">Enviar</button>
      </form>
    </ContentDiv>
  );
}
