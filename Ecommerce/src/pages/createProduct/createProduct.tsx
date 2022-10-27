import { FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product, ProductInput } from "../../utils/types/product.type";
import { ContentDiv } from "./styles";
import { api } from "../../utils/api/api";
import { useProducts } from "../../hooks/products";

export function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const { createProduct, updateProduct } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  async function getProductById() {
    if (id) {
      const product = await api.getProductById(id);
      setProduct(product);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct: ProductInput = {
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      price: parseFloat(e.currentTarget.productPrice.value),
      imageURL: e.currentTarget.productImage.value,
    };

    // 0.5 Everton preço como string

    if (id) {
      const productToUpdate = { ...newProduct, id: id };
      updateProduct(productToUpdate);
      navigate("/");
    } else {
      createProduct(newProduct);
      navigate("/");
    }
  }

  return (
    <ContentDiv>
      <h2>{id ? "Atualizar Produto" : "Cadastro de Produto"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          defaultValue={product?.name}
          type="text"
          name="productName"
          required
        ></input>
        <label>Product Description</label>
        <input
          defaultValue={product?.description}
          type="text"
          name="productDescription"
          required
        ></input>
        <label>Product Price</label>
        <input
          defaultValue={product?.price}
          type="number"
          step="0.01"
          name="productPrice"
          required
        ></input>
        <label>Product Image</label>
        <input
          defaultValue={product?.imageURL}
          type="text"
          name="productImage"
          required
        ></input>
        <section>
          <button type="submit">Enviar</button>
        </section>
      </form>
    </ContentDiv>
  );
}
