import React, { Fragment, useState } from "react";
import Cart from "./COMPONENTS/CART/cart";
import Header from "./COMPONENTS/LAYOUT/header";
import Meals from "./COMPONENTS/MEALS/meals";
import CartProvider from "./STORE/cartContextProvider";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCart = function () {
    setIsCartShown(true);
  };

  const hideCart = function () {
    setIsCartShown(false);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") setIsCartShown(false);
  });

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCart}></Cart>}
      <Header onShowCart={showCart}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
