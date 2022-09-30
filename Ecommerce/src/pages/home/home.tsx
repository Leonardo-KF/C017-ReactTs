import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { CardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Product } from "../../utils/types/product.type";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProductsInfo() {
    const allProducts = await api.getProducts();
    setProducts(allProducts ?? []);
  }

  useEffect(() => {
    getProductsInfo();
  }, []);

  return (
    <CardListDiv>
      {products.map((product) => (
        <Card
          id={product.id}
          description={product.description}
          imageURL={product.imageURL}
          name={product.name}
          price={product.price}
        />
      ))}
    </CardListDiv>
  );
}
