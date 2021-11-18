const reducer = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      cart: [],
    };
  } else if (action.type === "REMOVE_ITEM") {
    const filterItem = state.cart.filter(item => item.id !== action.id);
    return {
      ...state,
      cart: filterItem,
    };
  } else if (action.type === "TOTAL") {
    let { total, amount } = state.cart.reduce(
      (total, item) => {
        const { price, amount } = item;
        const itemTotals = price * amount;
        total.total += itemTotals;
        total.amount += amount;
        return total;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return {
      ...state,
      total,
      amount,
    };
  } else if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map(item => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          if (action.payload.type === "dec") {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
        }
        return item;
      })
      .filter(item => item.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }
  throw new Error("no matching action type");
};

export default reducer;
