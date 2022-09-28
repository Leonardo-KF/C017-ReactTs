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
          <img src="" alt="logo" />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Search Product" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate("/create");
            }}
          >
            Cadastrar Produto
          </button>
          <button>Carrinho</button>
          <button>Logout</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
