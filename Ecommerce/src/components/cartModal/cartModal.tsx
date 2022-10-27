import { useProducts } from "../../hooks/products";
import { MainSection, ProductSection } from "./styles";
import {
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoCloseOutline,
} from "react-icons/io5";
export function CartModal() {
  const { cart } = useProducts();
  return (
    <MainSection>
      <h2>Items no carrinho:</h2>
      <ProductSection>
        <h3>produto</h3>
        <section>
          <button>
            <IoAddCircleOutline size={18} />
          </button>
          <span>2</span>
          <button>
            <IoRemoveCircleOutline size={18} />
          </button>
        </section>
        <span>R$20</span>
        <button>
          <IoCloseOutline size={18} color="red" />
        </button>
      </ProductSection>
      <div>
        <h2>Total: R$40</h2>
      </div>
    </MainSection>
  );
}
