import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";

//GET ALL PRODUCTS
const useGetAllProduct = (parameters) => {
      console.log(parameters)
      const { page, limit, name } = parameters; // Destructure parameters

      const queryKey = ["all-products", page,limit,name];       
      const queryFn = async () => {
        try {
          const response = await api.get(`/products?page=${page}&limit=${limit}&name=${name}`);
          return response.data; 
        } catch (error) {
          throw new Error(error.message);
        }
      };
      return useQuery({ queryKey,queryFn});
    };
 
export { useGetAllProduct }
