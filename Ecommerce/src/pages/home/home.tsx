import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { CardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { Product } from "../../utils/types/product.type";
import { useProducts } from "../../hooks/products";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [control, setControl] = useState<boolean>(false);

  const { filter } = useProducts();

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

  // KISS - Keep It Simple and Stupid

  return (
    <CardListDiv>
      {products.map((product) => {
        if (product.name.toUpperCase().includes(filter.toUpperCase())) {
          return (
            <Card
              key={product.id}
              id={product.id}
              description={product.description}
              imageURL={product.imageURL}
              name={product.name}
              price={product.price}
              updatePage={updatePage}
            />
          );
        }
      })}
    </CardListDiv>
  );
}
