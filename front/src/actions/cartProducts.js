export const addProductActionCreator = (payload = undefined) => ({
      type: "ADD_PRODUCT",
      payload,
});

export const deleteProductActionCreator = (payload = undefined) => ({
      type: "DELETE_PRODUCT",
      payload,
});

export const increaseProductActionCreator = (payload = undefined) => ({
      type: "INCREASE_EXIST_PRODUCT",
      payload,
});
export const decreaseProductActionCreator = (payload = undefined) => ({
      type: "DECREASE_EXIST_PRODUCT",
      payload,
});
export const checkOutActionCreator = (payload = undefined) => ({
      type: "CHECKOUT",
      payload,
});