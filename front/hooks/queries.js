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
    // GET PRODUCT DETAILS
const useProductDetails = (parameter) => {
      const queryKey = ["products", parameter];
      const queryFn = async () => {
        try {
          const response = await api.get(`/products/${queryKey[1]}`); // Fetch the product by ID
          return response.data; // Return the product data
        } catch (error) {
          throw new Error(error.message); // Throw error for handling
        }
      };
      return useQuery({queryKey,queryFn});
    }

export { useGetAllProduct,useProductDetails }
