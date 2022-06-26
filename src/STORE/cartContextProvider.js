import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = function (state, actions) {
  if (actions.type == "ADD") {
    const updatedTotalAmount =
      state.totalAmount + actions.item.item.price * actions.item.item.amount;
    let updatedItems;
    const repeatedIndex = state.items.findIndex(
      (ele) => ele.item.id == actions.item.item.id
    );
    const repeated = state.items[repeatedIndex];
    // console.log(repeated);
    if (repeated) {
      const updatedItem = {
        item: {
          ...repeated.item,
          amount: repeated.item.amount + actions.item.item.amount,
        },
      };
      // console.log(updatedItem);
      updatedItems = [...state.items];
      updatedItems[repeatedIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(actions.item);
      // we should use concat as it returns new array instead of using push(it doesnot returns new array instead it edits the value which is not visible to react )
    }

    // console.log(actions.item.item.price, actions.item.item.amount);

    // console.log(updatedTotalAmount);
    // console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultState;
};
const defaultState = { items: [], totalAmount: 0 };

const CartProvider = function (props) {
  const [state, dispatchCartActions] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = function (item) {
    dispatchCartActions({ type: "ADD", item: { item } });
  };
  const removeItemFromCartHandler = function (id) {
    dispatchCartActions({ type: "REMOVE", id: { id } });
  };

  const cartContext = {
    items: state.items,
    total: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
