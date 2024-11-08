import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../configs/api";

// POST - REGISTRATION
const useRegister = () => {
      const mutationFn = async (data) => {
            const response = await api.post("/auth/register", data);
            return response.data;
      };
      return useMutation({ mutationFn });
}

// POST - LOGIN
const useLogin = () => {
      const mutationFn = async (data) => {
            const response = await api.post("/auth/login", data);
            return response.data;
      };
      return useMutation({ mutationFn });
}

// POST - ADD PRODUCT
const useCreateProduct = () => {
      const queryClient = useQueryClient();
      const mutationFn = async (data) => {
            const response = await api.post("/products", data);
            return response.data;
      };
      const onSuccess = async () => {
            await queryClient.invalidateQueries("all-products")//refresh data
      }
      return useMutation({ mutationFn, onSuccess });//onSuccess run when the result return
}

//PUT - EDIT PRODUCT
const useUpdateProduct = () => {
      const queryClient = useQueryClient();
      const mutationFn = async (data) => {
            const response = await api.put(`/products/${data.id}`, data);            
            return response.data
      }
      const onSuccess = async () => {
            await queryClient.invalidateQueries("all-products");
      };
      const onError = (error) => {
            console.error("Error updating product:", error);
      }
      return useMutation({ mutationFn, onSuccess, onError });

}




export {
      useRegister, useLogin, useCreateProduct, useUpdateProduct

}