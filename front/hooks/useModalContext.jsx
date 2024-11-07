import { useContext } from "react"
import { ModalContext } from "../context/ModalContext";

const useModalContext = () => {
      const modalFeatures = useContext(ModalContext)
      return modalFeatures
}

export default useModalContext;