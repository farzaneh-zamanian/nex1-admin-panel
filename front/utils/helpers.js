//REMOVE THE "-" BETWEEN ID TO SHOW LIKE A STRING CHARACTER
const modifiedString = (id) => {
      return id.replace(/-/g, "");
};

//THE TOTOAL PRICE OF SELECTED PRODUCTS
const sumProductsItems = (products) => {
      const productsQuantity = products.reduce((total, product) => total + product.productQuantity, 0)
      const totalPrice = products.reduce((total, product) => total + product.price * product.productQuantity, 0).toFixed(2)

      return { productsQuantity: productsQuantity, totalPrice: totalPrice }

}
//FIND PRODUCT QUANTITY 
const productItemQuantity = (state, id) => {
      const index = state.cartProductsData.findIndex(product => product.id === id)
      if (index === -1) return 0;
      else {
            return state.cartProductsData[index].productQuantity;

      }
}



export { modifiedString, sumProductsItems, productItemQuantity };