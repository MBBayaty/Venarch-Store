import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//components
import NavbarBurger from "./components/mainPage/NavbarBurger";
import Landing from "./components/mainPage/Landing";
import Products from "./components/store/Products";
import Search from "./components/mainPage/Search";
import AboutUs from "./components/mainPage/AboutUs";
import DetailsPage from "./components/store/DetailsPage";
import ShopCart from "./components/store/ShopCart";
// import LoginGoogle from "./components/validationForm/LoginGoogle";
import SignUp from "./components/validationForm/SignUp";
import Login from "./components/validationForm/Login";
import NotFound from "./components/mainPage/NotFound";

//contexts
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
// import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          {/* <AuthContextProvider> */}
          <NavbarBurger />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/shopcart" element={<ShopCart />} />
            <Route path="/aboutus/*" element={<AboutUs />}>
              <Route path="programmer" element={<h1>Programmer</h1>} />
              <Route path="drivers" element={<h1>drivers</h1>} />
            </Route>
            {/* <Route path="/signup" element={<SignUp />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/login" element={<LoginGoogle />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
          </Routes>
          {/* </AuthContextProvider> */}
        </CartContextProvider>
      </ProductsContextProvider>
      <Search />
    </>
  );
};

export default App;
