import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";

// Action Creator to fetch data

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const resoponse = await fetch(
        "https://shop-cart-de354-default-rtdb.firebaseio.com/cart.json"
      );

      if (!resoponse.ok) {
        throw new Error("Something went wrong....");
      }

      const data = await resoponse.json();

      return data;
    };

    try {
        const getData = await fetchData();
        dispatch(cartAction.replaceCart({
            items:getData.items || [],
            totalQunatity:getData.totalQunatity || 0
        }));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Erro...",
          message: "Something went wrong...",
        })
      );
    }
  };
};

// Action Creator to send data
export const sendCartData = (cartObj) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Data is Sending...",
      })
    );
    const sendData = async () => {
      const resoponse = await fetch(
        "https://shop-cart-de354-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items:cartObj.items,
            totalQunatity:cartObj.totalQunatity
          }),
        }
      );

      if (!resoponse.ok) {
        throw new Error("Something went Wrong....");
      }
    };

    try {
      await sendData();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success...",
          message: "Data is sent successfully...",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Erro...",
          message: "Something went wrong...",
        })
      );
    }
  };
};
