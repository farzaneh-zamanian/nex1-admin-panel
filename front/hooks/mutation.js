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


export {
      useRegister,
 
  }