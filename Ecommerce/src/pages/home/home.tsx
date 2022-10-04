import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { CardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Product } from "../../utils/types/product.type";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getProductsInfo() {
    const allProducts = await api.getProducts();
    setProducts(allProducts ?? []);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getProductsInfo();
  }, [control]);

  return (
    <CardListDiv>
      {products.map((product) => (
        <Card
          id={product.id}
          description={product.description}
          imageURL={product.imageURL}
          name={product.name}
          price={product.price}
          updatePage={updatePage}
        />
      ))}
    </CardListDiv>
  );
}
