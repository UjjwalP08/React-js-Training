import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiAction } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInintal = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiReducer.isCartVisible);

  const cartObj = useSelector((state) => state.cartReducer);
  const notification = useSelector((state) => state.uiReducer.notification);

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Data is Sending...",
        })
      );
      const resoponse = await fetch(
        "https://shop-cart-de354-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartObj),
        }
      );

      

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success...",
          message: "Data is sent successfully...",
        })
      );
    };
    if (isInintal) {
      isInintal = false;
      return;
    }
    sendData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Erro...",
          message: "Something went wrong...",
        })
      );
    });
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
