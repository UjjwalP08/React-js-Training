import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData } from "./store/cart-slice";
import Notification from "./components/UI/Notification";

let isInintal = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiReducer.isCartVisible);

  const cartObj = useSelector((state) => state.cartReducer);
  const notification = useSelector((state) => state.uiReducer.notification);

  useEffect(() => {
   
    if (isInintal) {
      isInintal = false;
      return;
    }
    dispatch(sendCartData(cartObj))
      }, [cartObj, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
