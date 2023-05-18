import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };
  return (
    <CartProvider>
      {cartVisible && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {/* App component is pass shooCartHandler function as  onShowCart  prop  */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
