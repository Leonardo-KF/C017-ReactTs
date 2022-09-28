import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "../../mocks/productList";
import { Product } from "../../utils/types/product.type";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName"></input>
        <input type="text" name="productDescription"></input>
        <input type="number" name="productPrice"></input>
        <input type="text" name="productImage"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
