import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProduct } from "./pages/createProduct/createProduct";
import GlobalStyle, { Content } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
