import { Card } from "../../components/card/card";
import { CardListDiv } from "./styles";
import { useState } from "react";

import { useProducts } from "../../hooks/products";

export function Home() {
  const { products } = useProducts();

  // KISS - Keep It Simple and Stupid
  return (
    <CardListDiv>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            description={product.description}
            imageURL={product.imageURL}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </CardListDiv>
  );
}
