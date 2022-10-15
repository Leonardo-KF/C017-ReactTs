import { Link, useNavigate } from "react-router-dom";
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Tabajara</h1>
          <img src="./comprar.png" alt="logo" height="30px" width="30px" />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Search Product" />
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
          {localStorage.getItem("token") ? <button>Carrinho</button> : null}
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
