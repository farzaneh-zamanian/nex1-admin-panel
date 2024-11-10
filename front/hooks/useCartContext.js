import { useContext } from "react"
import { CartContext } from "../context/CartContext";



//CONSUMER
const useCartContext = () => {
      const carts = useContext(CartContext)
      return carts;
}

export default useCartContext;