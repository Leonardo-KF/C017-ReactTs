import { Link, useNavigate } from "react-router-dom";
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
} from "./styles";
import { useProducts } from "../../hooks/products";
import { Card } from "../card/card";
import * as HoverCard from "@radix-ui/react-hover-card";
import { TiShoppingCart } from "react-icons/ti";
import { CartModal } from "../cartModal/cartModal";

export function Header() {
  const navigate = useNavigate();

  const { setFilter } = useProducts();

  function searchProducts(productName: string) {
    setFilter(productName);
  }

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Tabajara</h1>
          <img src="comprar.png" alt="logo" height="30px" width="30px" />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => {
            searchProducts(e.currentTarget.value);
          }}
        />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          {localStorage.getItem("token") ? (
            <button
              onClick={() => {
                navigate("/create");
              }}
            >
              Cadastrar Produto
            </button>
          ) : null}
          {localStorage.getItem("token") ? (
            <HoverCard.Root>
              <HoverCard.Trigger>
                <TiShoppingCart size={25} />
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content>
                  <CartModal />
                  <HoverCard.Arrow />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          ) : null}
          {localStorage.getItem("token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastro
            </button>
          )}
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
