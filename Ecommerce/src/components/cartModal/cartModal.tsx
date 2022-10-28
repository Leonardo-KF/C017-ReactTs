import { useProducts } from "../../hooks/products";
import { MainSection, ProductSection } from "./styles";
import {
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
export function CartModal() {
  const { cart, addToCart, downQuantity, deleteToCart } = useProducts();
  const [total, setTotal] = useState<number>(0);

  function getTotal() {
    let totalCart = 0;
    cart.forEach(({ quantity, price }) => {
      totalCart = totalCart + quantity * price;
    });
    setTotal(totalCart);
  }

  useEffect(() => {
    getTotal();
  }, [cart]);

  return (
    <MainSection>
      <h2>Items no carrinho:</h2>

      {cart.length === 0 ? (
        <>
          <h3>Nenhum item no carrinho!</h3>
          <h4>Adicione algo ao carrinho!!</h4>
        </>
      ) : (
        cart.map((product) => {
          return (
            <ProductSection key={product.id}>
              <h4>{product.name}</h4>
              <section>
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  <IoAddCircleOutline size={18} />
                </button>
                <h3>{product.quantity}</h3>
                <button
                  onClick={() => {
                    downQuantity(product.id);
                  }}
                >
                  <IoRemoveCircleOutline size={18} />
                </button>
              </section>
              <span>R$ {(product.quantity * product.price).toFixed(2)}</span>
              <button
                onClick={() => {
                  deleteToCart(product.id);
                }}
              >
                <IoCloseOutline size={18} color="red" />
              </button>
            </ProductSection>
          );
        })
      )}

      <div>
        <h2>Total: R$ {total.toFixed(2)}</h2>
      </div>
    </MainSection>
  );
}
