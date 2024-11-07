// import { useMutation, useQueryClient } from "@tanstack/react-query";
// //DELETE - DELET A PRODUCT
// const useDeleteProduct = () => {
//       const queryClient = useQueryClient();
//       const mutationFn = async (id) => {
//           const response = await api.delete(`/products/${id}`);
//           return response.data
//       }
//       const onSuccess = async () => {
//           await queryClient.invalidateQueries("all-products");
//       };
//       return useMutation({ mutationFn, onSuccess });
//   }
  

//   export {

//       useDeleteProduct,
   
//   }