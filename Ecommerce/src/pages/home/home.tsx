import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { CardListDiv } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../utils/types/product.type";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [control, setControl] = useState<boolean>(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  async function getProductsInfo() {
    const allProducts = await api.getProducts();
    setProducts(allProducts ?? []);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getProductsInfo();
    const user = api.getLoggedUser();
    console.log(user);
  }, [control]);

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
            updatePage={updatePage}
          />
        );
      })}
    </CardListDiv>
  );
}
