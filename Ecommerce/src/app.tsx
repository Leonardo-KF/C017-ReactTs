import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/register";
import { CreateProduct } from "./pages/createProduct/createProduct";
import { Login } from "./pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./auth/auth";
import { AuthHoc } from "./auth/authHoc";
import { ProductsProvider } from "./context/context";
import { Content } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Auth />
        <Content>
          <Routes>
            <Route path="/" element={<AuthHoc children={<Home />} />} />
            <Route
              path="/create"
              element={<AuthHoc children={<CreateProduct />} />}
            />
            <Route
              path="/update/:id"
              element={<AuthHoc children={<CreateProduct />} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
      </ProductsProvider>
      <Footer />
    </BrowserRouter>
  );
}
