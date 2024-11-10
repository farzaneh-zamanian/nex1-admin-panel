import { sumProductsItems } from "../../utils/helpers";
import { addProductActionCreator, checkOutActionCreator, decreaseProductActionCreator, deleteProductActionCreator, increaseProductActionCreator } from "../actions/cartProducts";

const productReducer = (state, action) => {
  switch (action.type) {
    //ADD PRODUCT
    case addProductActionCreator().type: {
      const findedProduct = state.cartProductsData.find(
        (product) => product.id === action.payload.id
      );
      if (!findedProduct) {
        state.cartProductsData.push({
          ...action.payload,
          productQuantity: 1,
        });
      }

      return {
        ...state,
        ...sumProductsItems(state.cartProductsData),
        checkOut: false,
      };
    }
    //DELETE PRODUCT
    case deleteProductActionCreator().type: {
      const newCartProductsData = state.cartProductsData.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cartProductsData: [...newCartProductsData],
        ...sumProductsItems(newCartProductsData),
      };
    }
    //INCREASE PRODUCT
    case increaseProductActionCreator().type: {
      const index = state.cartProductsData.findIndex(
        (product) => product.id === action.payload.id
      );
      // In Redux, it's essential to maintain immutability when updating the state
      // Instead of directly mutating the productQuantity
      //  property, create a new copy of the cartProductsData 
      // array and update the productQuantity
      const newCartProductsData = [...state.cartProductsData];
      newCartProductsData[index] = { ...newCartProductsData[index], productQuantity: newCartProductsData[index].productQuantity + 1 };
      return {
        ...state,
        cartProductsData: newCartProductsData,
        ...sumProductsItems(newCartProductsData),
      };
    }
    //DECREASE PRODUCT
    case decreaseProductActionCreator().type: {
      const index = state.cartProductsData.findIndex(
        (product) => product.id === action.payload.id
      );
      const newCartProductsData = [...state.cartProductsData];
      newCartProductsData[index] = { ...newCartProductsData[index], productQuantity: newCartProductsData[index].productQuantity - 1 };
      return {
        ...state,
        cartProductsData: newCartProductsData,
        ...sumProductsItems(newCartProductsData),
      };
    }

    case checkOutActionCreator().type:
      return {
        cartProductsData: [],
        totalPrice: 0,
        productsQuantity: 0,
        checkOut: true,
      };
    default:
      throw new Error("invalid Acrion!")
  }
};


export default productReducer