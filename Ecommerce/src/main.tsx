import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/register";
import { CreateProduct } from "./pages/createProduct/createProduct";
import { Login } from "./pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./auth/auth";
import { AuthHoc } from "./auth/authHoc";
import GlobalStyle, { Content } from "./styles/global";

// HOC - High Order Component

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Auth />
      <Content>
        <Routes>
          <Route path="/" element={<AuthHoc children={<Home />} />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<CreateProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
