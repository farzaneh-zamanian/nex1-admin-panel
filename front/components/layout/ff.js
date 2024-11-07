// import React from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import api from '../../../api'; // Assume this is your API setup

// // Component to manage products
// function AdminProductsPage({ initialProducts }) {
//   const queryClient = useQueryClient();

//   // Fetch products using React Query
//   const { data: products, isLoading } = useQuery('products', () => api.get('/products').then(res => res.data), {
//     initialData: initialProducts, // Use initial data from server-side
//   });

//   // Mutation for adding a product
//   const addProductMutation = useMutation(newProduct => api.post('/products', newProduct), {
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries('products');
//     },
//   });

//   // Mutation for editing a product
//   const editProductMutation = useMutation(updatedProduct => api.put(`/products/${updatedProduct.id}`, updatedProduct), {
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries('products');
//     },
//   });

//   // Mutation for deleting a product
//   const deleteProductMutation = useMutation(productId => api.delete(`/products/${productId}`), {
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries('products');
//     },
//   });

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Admin Products</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name}
//             <button onClick={() => editProductMutation.mutate({ id: product.id, name: 'Updated Name' })}>Edit</button>
//             <button onClick={() => deleteProductMutation.mutate(product.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addProductMutation.mutate({ name: 'New Product' })}>Add Product</button>
//     </div>
//   );
// }

// // Fetch initial data on server-side
// export async function getServerSideProps() {
//   try {
//     const res = await api.get('/products');
//     const initialProducts = res.data;
//     return {
//       props: { initialProducts },
//     };
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return {
//       props: { initialProducts: [] },
//     };
//   }
// }

// export default AdminProductsPage;