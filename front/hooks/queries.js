import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";


//GET ALL PRODUCTS
const useGetAllProduct = () => {
      const queryKey = ["all-products"];

      const queryFn = async () => {
            try {
                  const response = await api.get("/products");
                  return response.data.data;
            } catch (error) {
                  throw new Error(error.message);
            }
      };
      return useQuery({ queryKey, queryFn });
};

export { useGetAllProduct }
