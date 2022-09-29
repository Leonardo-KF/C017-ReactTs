import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "../../mocks/productList";
import { Product } from "../../utils/types/product.type";
import { ContentDiv } from "./styles";

export function CreateProduct() {
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct: Product = {
      id: "1",
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      price: e.currentTarget.productPrice.value,
      imageURL: e.currentTarget.productImage.value,
    };

    productList.push(newProduct);

    navigate("/");
  }

  return (
    <ContentDiv>
      <h2>Cadatro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input type="text" name="productName"></input>
        <label>Product Description</label>
        <input type="text" name="productDescription"></input>
        <label>Product Price</label>
        <input type="number" name="productPrice"></input>
        <label>Product Image</label>
        <input type="text" name="productImage"></input>
        <button type="submit">Enviar</button>
      </form>
    </ContentDiv>
  );
}
